import { ProductModel } from '../db/models/Product.js';

export const getAllProductsService = () => {
  return ProductModel.find();
};

export const getProductsByIdService = (productId) => {
  return ProductModel.findById(productId);
};
