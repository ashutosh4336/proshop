// import { PrismaClient } from '@prisma/client';

import { prisma } from '@/lib/prisma';
import sampleData from './sample-data';

async function seed() {
  try {
    await prisma.product.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });
    console.log('Seeding successful');
  } catch (error) {
    console.error('Error while Seeding : ', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
