import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  patchProductController,
  deleteProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', ctrlWrapper(getProductByIdController));
router.post('/', ctrlWrapper(createProductController));
router.patch('/:productId', ctrlWrapper(patchProductController));
router.delete('/:productId', ctrlWrapper(deleteProductController));

export default router;
