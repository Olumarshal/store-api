const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products, ndHits: products.length })
}
const getAllProducts = async (req, res) => {
    const { featured, company } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }

    const products = await Product.find(queryObject);
    res.status(200).json({ products, ndHits: products.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}