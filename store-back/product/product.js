const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: String,
    price: Number,
    img: String
}, {timestamps: true});

module.exports = model('Product', ProductSchema);