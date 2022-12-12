const model = require('../model/cd-model')

const getAllCategories = async() => await model.allcategories();
const getStock = async() => await model.stock();

module.exports = {
    getAllCategories,
    getStock
}

