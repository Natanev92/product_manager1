const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title must be provided"]
    },
    price: {
        type: Number,
        min: [0, "Product must be at least $0"]
    },
    description: {
        type: String,
        required: [true, "Product description must be provided"]
    }
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);