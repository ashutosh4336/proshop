import React from 'react';
import { APP_AUTHOR, APP_NAME, APP_VERSION } from '@/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t'>
      <div className='p-5 flex-center'>
        <p className='text-center'>
          &copy; {currentYear} {APP_NAME} {APP_VERSION}. All Rights Reserved.
          Made with ❤️ by {APP_AUTHOR}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
