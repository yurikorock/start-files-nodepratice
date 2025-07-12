import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', getAllProductsController);
router.get('/:productId', getProductByIdController);
router.post('/', createProductController);

export default router;
