import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/types';
import ProductPrice from './ProductPrice';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            priority={true}
            alt={product.name}
            width={300}
            height={300}
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{product?.brand}</div>

        <Link href={`/products/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p className='text-lg font-bold'>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice
              value={Number(product.price)}
              //   className='text-red-500'
            />
          ) : (
            <p className='text-lg font-bold text-destructive'>Out of Stock</p>
          )}
        </div>
        <p className='text-sm text-gray-500'>{product.description}</p>
      </CardContent>
    </Card>
  );
}
