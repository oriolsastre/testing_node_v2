const { PrismaClient}  = require('@prisma/client');
const prisma = new PrismaClient();

const allcategories = async() => await prisma.tipos_vinos.findMany();
const stock = async() => await prisma.productos.findMany();

module.exports = {
    allcategories,
    stock
}