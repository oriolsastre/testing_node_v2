
const getAllCategories = async(Model) => await Model.allcategories();
const getCategory = async(Model, id) => await Model.category(id);
const getStock = async(Model) => await Model.stock();

module.exports = Model => {
    return {
        getAllCategories : getAllCategories(Model),
        getCategory: getCategory(Model, id),
        getStock: getStock(Model)
    }
}

