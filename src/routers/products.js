import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
} from '../controllers/products.js';

const router = Router();

router.get('/', getAllProductsController);
router.get('/:productId', getProductByIdController);

export default router;
