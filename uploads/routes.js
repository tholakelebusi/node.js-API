const express = require('express');
const app = express();
const router = express.Router();
const multerConfig = require("./uploads/upload");

router.post('/test', multerConfig.saveToUploads, (req, res) => {
    return res.json("file uploaded successfully");
});


module.exports=router;