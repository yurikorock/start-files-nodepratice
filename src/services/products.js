import { ProductModel } from '../db/models/Product.js';

export const getAllProductsService = ({
  category,
  minPrice,
  maxPrice,
  userId,
}) => {
  const productsQuery = ProductModel.find({ userId });
  if (category) {
    productsQuery.where('category').equals(category);
  }
  if (minPrice) {
    productsQuery.where('price').gte(minPrice);
  }
  if (maxPrice) {
    productsQuery.where('price').lte(maxPrice);
  }
  return productsQuery;
};

export const getProductsByIdService = async (productId, userId) => {
  const product = await ProductModel.findOne({
    _id: productId,
    userId: userId,
  });
  return product;
};

export const createProductService = async (body) => {
  const product = await ProductModel.create(body);
  return product;
};
export const updateProductService = async (productId, payload, userId) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId, userId },
    payload,
    { new: true },
  );
  if (!result) return null;
  return {
    product: result,
  };
};
export const deleteProductService = async (productId, userId) => {
  const product = await ProductModel.findOneAndDelete({
    _id: productId,
    userId: userId,
  });
  return product;
};
