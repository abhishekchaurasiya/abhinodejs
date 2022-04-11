const express = require('express');

const router = express.Router();


router.post("/players", function (req, res) {

    res.send('hello')
})




module.exports = router;
// adding this comment for no reason