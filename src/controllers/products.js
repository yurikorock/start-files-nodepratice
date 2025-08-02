import createHttpError from 'http-errors';
import {
  getAllProductsService,
  getProductsByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res) => {
  const { category, minPrice, maxPrice } = parseFilterParams(req.query);
  const userId = req.user._id;
  const products = await getAllProductsService({
    category,
    minPrice,
    maxPrice,
    userId,
  });
  // console.log({ category, minPrice, maxPrice });
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;
  const product = await getProductsByIdService(productId, userId);
  if (!product) {
    throw createHttpError(404, 'product not found');
  }
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};
export const createProductController = async (req, res) => {
  const userId = req.user._id;
  const product = await createProductService({ ...req.body, userId });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};
export const patchProductController = async (req, res, next) => {
  const { productId } = req.params;
  const userId = req.user._id;

  const result = await updateProductService(productId, req.body, userId);
  // console.log('productId:', result);
  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result.product,
  });
};
export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  const userId = req.user._id;
  const product = await deleteProductService(productId, userId);
  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.status(204).send();
};
