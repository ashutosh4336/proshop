'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/constants';
import Link from 'next/link';

// Image.prefetch('/images/logo.svg');

function NotFound() {
  return (
    <div
      className='flex flex-col items-center justify-center'
      style={{
        height: '100%',
      }}
    >
      <Image
        style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        src='/images/logo.svg'
        alt={APP_NAME + 'Logo'}
        height={48}
        width={48}
        priority={true}
      />
      <div className='w-auto p-6 rounded-lg shadow-md text-center'>
        <h1 className='text-4xl font-bold mb-4'>404</h1>
        <p className='text-lg'>
          Couldn&apos;t find the Product you&apos;re looking for
        </p>
        <Button asChild className='mt-5 p-5 ml-2'>
          <Link href='/'>Back To Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
