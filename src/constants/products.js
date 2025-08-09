import path from 'node:path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.resolve(__dirname, '../db/products.json');

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
