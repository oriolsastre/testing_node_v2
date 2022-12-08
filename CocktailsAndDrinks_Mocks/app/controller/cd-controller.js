const cdservice = require ('../service/cd-service');

const ping = (req, resp) => resp.status(200).send({'msg': 'pong'});

const categories = (req, resp) => {
    cdservice.getAllCategories().then(
        data => {
            console.log(data);
            resp.status(200).json(data);
        });
}

module.exports = {
    ping,
    categories
}