import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  patchProductController,
  deleteProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { validateId } from '../middlewares/validateId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', validateId, ctrlWrapper(getProductByIdController));
router.post(
  '/',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);
router.patch(
  '/:productId',
  validateId,
  validateBody(updateProductSchema),
  ctrlWrapper(patchProductController),
);
router.delete('/:productId', validateId, ctrlWrapper(deleteProductController));

export default router;
