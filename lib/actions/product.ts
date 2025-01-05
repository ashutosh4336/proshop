'use server';
// import { PrismaClient } from '@prisma/client';

import { prismaToObj } from '@/helper';
import { prisma } from '../prisma';

// const prisma = new PrismaClient();

// Get product by id
export const getProduct = async (id: string) => {
  return prisma.product.findUnique({ where: { id } });
};

// Get Latest products
export const getProducts = async ({
  sortBy = 'desc',
  limit = 10,
  offset = 0,
}: {
  sortBy: 'asc' | 'desc';
  limit: number;
  offset: number;
}) => {
  const products = await prisma.product.findMany({
    take: limit,
    skip: offset,
    orderBy: { createdAt: sortBy },
  });
  return prismaToObj(products);
};

// Get product by id
export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findFirst({ where: { slug } });
  return prismaToObj(product);
};
