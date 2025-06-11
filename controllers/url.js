const URL = require("../models/url");
const shortid = require("shortid");

async function handleGenerateNewShortUrls(req, res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: "URL required"});
    }
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    })

    return res.render("home", {
        id: shortID,
    });
};

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    console.log(result);
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortUrls,
    handleGetAnalytics,
};