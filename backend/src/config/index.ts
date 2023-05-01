/**
 * @author AjayKrishna
 * @summary app configuration file
 */

import dotenv from 'dotenv';

dotenv.config();

const config = {
  environment: process.env.NODE_ENV || 'development',
  serverPort: process.env.PORT || 3000,
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/flee',
  },
  api: {
    prefix: process.env.API_PREFIX || '/api/v1',
  },
  host: process.env.HOST || '127.0.0.1',
  jwt: {
    secret: 'C1ZWpMja&V0c2vBDFhq^N*VXR1@ekULC',
    expires: '30d',
  },
};

export default config;
