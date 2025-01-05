import { z } from 'zod';
import { insertProductSchema } from '@/helper/validator';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date;
};