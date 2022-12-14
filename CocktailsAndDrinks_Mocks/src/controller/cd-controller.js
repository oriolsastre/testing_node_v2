const CDService = require ('../service/cd-service');
const logger = require ('../config/logger');

const ping = (req, resp) => resp.status(200).send({'msg': 'pong'});

const categories = (req, resp) => {
    cdservice.getAllCategories().then(data => {
        resp.status(200).json(data);
    }).catch(err=> {
        logger.error(err.toString());
        resp.status(500).json([]);
    });

}

const category = (req, resp) => {

    let idCategory = req.params.idCategory;

    cdservice.getCategory(idCategory).then(data => {
        resp.status(200).json(data);
    }).catch(err=> {
        logger.error(err.toString());
        resp.status(500).json([]);
    });

}

const stock = (req, resp) => {
    cdservice.getStock().then(data => {
        resp.status(200).json(data);
    }).catch(err=> {
        logger.error(err.toString());
        resp.status(500).json([]);
    });

}

module.exports = {
    ping,
    categories,
    category,
    stock
}