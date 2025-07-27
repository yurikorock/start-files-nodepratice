import createHttpError from 'http-errors';
import {
  getAllProductsService,
  getProductsByIdService,
  createProductService,
  updateProductService,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductsByIdService(productId);
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
  const product = await createProductService(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};
export const patchProductController = async (req, res, next) => {
  const { productId } = req.params;

  const result = await updateProductService(productId, req.body);
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
