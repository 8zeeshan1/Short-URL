const express = require('express'); 
const router = express.Router();
const {restrictTo} = require("../middlewares/auth");
const URL = require("../models/url");

router.get("/admin/urls", restrictTo(["ADMIN"]), async(req, res) =>{
    const allUrls = await URL.find({}).populate("createdBy");
    return res.render("home",{
        urls: allUrls,
        role: req.user.role,
    })
});

router.get("/", restrictTo(["NORMAL","ADMIN"]), async(req, res) =>{
    const allUrls = await URL.find({ createdBy: req.user._id });
    return res.render("home",{
        urls: allUrls,
    });
});

router.get("/signup", (req, res) =>{
    return res.render("signup");
});

router.get("/login", (req, res)=>{
    return res.render("login");
});

// router.post("/", async(req, res) =>{
//     const allUrls = await URL.find({});
//     return res.render("home",{
//         urls: allUrls,
//     });
// });
module.exports = router;