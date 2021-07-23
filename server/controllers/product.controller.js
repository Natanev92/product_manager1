const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Index"
    });
};

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({allProducts}))
        .catch(err => res.json({err}))
};

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
};