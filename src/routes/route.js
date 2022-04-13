
const express = require('express');

const router = express.Router();

const bookModelSchema = require('../models/bookmodelschema');
const RouterBookControllers = require("../controllers/routercontroller");



router.post("/createBook", RouterBookControllers.createBookUserData);

router.get("/bookgetinfo", RouterBookControllers.getBookInfo);

router.post("/getBookInYear", RouterBookControllers.getBooksInYear);

router.post("/getParticularBooks", RouterBookControllers.getSeparetlybooks)

router.post("/getParticularYear", RouterBookControllers.getSeparetlyYears)

router.post("/getAllThings", RouterBookControllers.getAllThings)

router.get("/getXINRBooks", RouterBookControllers.getIndianPricebooks)

router.get("/getRandomBooks", RouterBookControllers.getRandomBooks)




module.exports = router;