const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const URL = require("./models/url");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
const staticRoute = require("./routes/staticRouter");
const urlRoutes = require("./routes/url");
const userRoute = require("./routes/user");
const { connectMongoDB } = require("./connection");
connectMongoDB(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTropology: true,
}).then(()=> console.log("MongoDB Connected"));
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
const path = require("path");

app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);


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
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 
app.use("/url", restrictToLoggedinUserOnly, urlRoutes);


app.listen(PORT, ()=>{
    console.log("Server started at PORT: ", PORT);
});