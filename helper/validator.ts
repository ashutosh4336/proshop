import { z } from 'zod';
import { formatNumber } from './index';

// Schema for inserting Product

const currency = z
  .string()
  .refine(
    (v) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(v))),
    'Price must be a number with 2 decimal places'
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(255),
  slug: z.string().min(3, 'Slug must be at least 3 characters').max(255),
  category: z
    .string()
    .min(3, 'Category must be at least 3 characters')
    .max(255),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(1000),
  stock: z.coerce.number().min(0),
  images: z
    .array(z.string().url())
    .min(1, 'Product must have at least one image'),
  idFeatured: z.boolean(),
  banner: z.string().nullable(),
  brand: z.string().min(3).max(255),

  price: currency,
});
