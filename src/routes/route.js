const express = require('express');

const router = express.Router();
const booknameUser = require('../models/bookusermodel');
const bookController = require('../controllers/createbookuser');

router.post("/bookuser", bookController.createAlldata);


router.get("/bookgetinfo", bookController.getBookUser);



module.exports = router;