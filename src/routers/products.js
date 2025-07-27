import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', ctrlWrapper(getProductByIdController));
router.post('/', ctrlWrapper(createProductController));
router.patch('/:productId', ctrlWrapper(patchProductController));

export default router;
