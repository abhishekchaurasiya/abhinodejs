const booknameUser = require('../models/bookusermodel');

const createBookUser = async (req, res) => {
    let data = req.body;
    let createAlldata = await booknameUser.create(data)
    res.send({ message: createAlldata })
}

const getBookUser = async (req, res) => {
    let getAlldata = await booknameUser.find()
    res.send({ message: getAlldata })
}

module.exports.createAlldata = createBookUser;
module.exports.getBookUser = getBookUser;
