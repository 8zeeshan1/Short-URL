const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const URL = require("./models/url");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");
const staticRoute = require("./routes/staticRouter");
const urlRoutes = require("./routes/url");
const userRoute = require("./routes/user");

const { connectMongoDB } = require("./connection");
connectMongoDB(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("MongoDB Connected"));

app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 
app.use(checkForAuthentication);

app.use("/url",restrictTo(["NORMAL","ADMIN"]), urlRoutes);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/id/:shortid", async(req,res)=>{
    const shortId = req.params.shortid;
   const entry = await URL.findOneAndUpdate({
        shortId,
    }, 
    { 
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    },
);
res.redirect(entry.redirectUrl);
});



app.listen(PORT, ()=>{
    console.log("Server started at PORT: ", PORT);
});