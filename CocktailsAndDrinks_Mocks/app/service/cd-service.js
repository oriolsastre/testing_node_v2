
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const category = await prisma.tipos_vinos.findMany();
console.log(category);





