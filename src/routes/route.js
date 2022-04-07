const express = require('express');




const router = express.Router();


router.get('/all-candidate', function (req, res) {

    let listOfCandidate = [
        {
            name: "Abhishek",
            age: 25,
            resident: {
                city: "rewa",
                village: " mahasaow"
            }
        }
    ];

    res.send('First Problem Solve from Welcome()', listOfCandidate)
    logger.welcome();
});






module.exports = router;
// adding this comment for no reason