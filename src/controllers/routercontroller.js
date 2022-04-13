const bookUserModel = require('../models/bookmodelschema');

const createBookUserData = async (req, res) => {
    let data = req.body;
    let userData = await bookUserModel.create(data);
    res.send({ message: userData })
}


const getBookInfo = async (req, res) => {

    let userData = await bookUserModel.find().select({ bookName: true, authorName: true, _id: 0 })
    res.send({ message: userData })
}

const getBooksInYear = async (req, res) => {
    let data = req.body
    data.year
    let allbooks = await bookUserModel.find(data)
    res.send({ message: allbooks })
}

const getSeparetlybooks = async (req, res) => {
    let data = req.body;
    data.bookName;
    let allBooks = await bookUserModel.find(data)
    res.send({ message: allBooks })
}

const getSeparetlyYears = async (req, res) => {
    let data = req.body;
    data.year;
    let allBooks = await bookUserModel.find(data)
    res.send({ message: allBooks })
}

// hence the condition will differ based on what you input in the request body
const getAllThings = async (req, res) => {
    let data = req.body;
    data.bookName;
    data.year;
    data.authorName;
    data.price.indianPrice;
    data.totalPage;
    let allBooks = await bookUserModel.find(data).select({ bookName: true, authorName: true, price: { indianPrice: true }, _id: 0 }).select({ bookName: true, year: true, authorName: true, price: { indianPrice: true }, totalPage: true, _id: 0 })
    res.send({ message: allBooks })
}


const getIndianPricebooks = async (req, res) => {
    let allbooks = await bookUserModel.find({ price: { indianPrice: { $in: [ "100INR", "200INR" ,"500INR"] } } }).select({ price: { indianPrice: true } })

    res.send({ message: allbooks })
}

const getRandomBooks = async function (req, res) {
    let randomBook = await bookUserModel.find({ $or: [{ totalPage: { $gt: 500 } }] }).select({ totalPage: true, bookName: true, authorName: true, price: { indianPrice: true }, _id: 0 })
    res.send({ msg: randomBook })

}


module.exports.createBookUserData = createBookUserData;
module.exports.getBookInfo = getBookInfo
module.exports.getBooksInYear = getBooksInYear;
module.exports.getSeparetlybooks = getSeparetlybooks
module.exports.getSeparetlyYears = getSeparetlyYears
module.exports.getAllThings = getAllThings
module.exports.getIndianPricebooks = getIndianPricebooks
module.exports.getRandomBooks = getRandomBooks