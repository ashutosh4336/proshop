import configParams from '@/config/config.json';

const env =
  (process.env.NODE_ENV as 'development' | 'production' | 'stage') ||
  'development';
const config = configParams[env];

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'https://prostore.com';

export const APP_VERSION =
  ((config.appVersion || '1.0.0') as string) +
  (env !== 'production' ? `-${env}` : '');
export const APP_NAME = config.appName || 'ProStore';
export const APP_DESCRIPTION = config.appDescription;
export const APP_AUTHOR = config.author || 'Ashutosh Panda';
export const LATEST_PRODUCT_LIMIT = config.latestProductLimit || 10;
