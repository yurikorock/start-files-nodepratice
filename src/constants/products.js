import path from 'node:path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.resolve(__dirname, '../db/products.json');
