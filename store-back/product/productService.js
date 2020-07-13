const ProductSchema = require('./product');

function create(product) {
    return ProductSchema.create(product);
}

function getPaged(limit, skip) {
    return ProductSchema.find()
    .limit(Number.parseInt(limit)).skip(Number.parseInt(skip)).sort('nome');
}

function findById(id) {
    return ProductSchema.findById(id);
}

function count() {
    return ProductSchema.count();
}

function deleteById(id) {
    return ProductSchema.deleteOne({_id: id});
}

module.exports = {
    create,
    getPaged,
    findById,
    count,
    deleteById
}