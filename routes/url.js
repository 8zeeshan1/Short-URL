const express = require("express");

const router = express.Router();
const {handleGenerateNewShortUrls, handleGetAnalytics} = require("../controllers/url");

router.post("/",handleGenerateNewShortUrls);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
