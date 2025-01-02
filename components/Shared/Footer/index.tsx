import React from 'react';
import { APP_NAME } from '@/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t'>
      <div className='p-5 flex-center'>
        <p className='text-center'>
          &copy; {currentYear} {APP_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
