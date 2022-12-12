const { PrismaClient}  = require('@prisma/client');
const prisma = new PrismaClient();

const allcategories = async() => await prisma.tipos_vinos.findMany();

module.exports = {
    allcategories
}