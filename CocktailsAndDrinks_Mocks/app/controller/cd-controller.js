const cdservice = require ('../service/cd-service');
const cdmodel = require('../model/cd-model');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ping = (req, resp) => resp.status(200).send({'msg': 'pong'});

const categories = async (req, resp) => {




    console.log(`The connection URL is ${process.env.DATABASE_URL}`)




    const categories = await prisma.tipos_vinos.findMany();
    resp.json(categories);

/*    cdmodel.allcategories().then(data => console.log(data));



    resp.status(200).json([]);*/

    /*    cdservice.getAllCategories().then(
            data => {
                console.log(data);
                resp.status(200).json(data);
            }).catch (err => {
                resp.status(500).json([]);
        });*/
}

module.exports = {
    ping,
    categories
}