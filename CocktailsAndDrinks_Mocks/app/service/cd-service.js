const model = require('../model/cd-model')

const getAllCategories = async() => await model.allcategories();
const getCategory = async(id) => await model.category(id);
const getStock = async() => await model.stock();

module.exports = {
    getAllCategories,
    getCategory,
    getStock
}

