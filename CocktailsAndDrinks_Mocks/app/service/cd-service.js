const model = require('../model/cd-model')

const getAllCategories = async() => await model.allcategories();

module.exports = {
    getAllCategories
}

