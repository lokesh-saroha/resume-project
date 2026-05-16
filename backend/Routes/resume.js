const express = require("express");
const router = express.Router();
const {upload} = require('../utils/multer');
const resumeController = require('../Controllers/resume');

router.post('/addResume',upload.single("resume"),resumeController.addResume);
router.get('/get/:user',resumeController.getAllResumesForUser);
router.get('/get/', resumeController.getResumeForAdmin);

module.exports = router;