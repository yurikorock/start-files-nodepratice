import { ProductModel } from '../db/models/Product.js';

export const getAllProductsService = ({ category, minPrice, maxPrice }) => {
  const productsQuery = ProductModel.find();
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

export const getProductsByIdService = (productId) => {
  return ProductModel.findById(productId);
};

export const createProductService = (body) => {
  return ProductModel.create(body);
};
export const updateProductService = async (productId, payload) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId },
    payload,
    { new: true },
  );
  if (!result) return null;
  return {
    product: result,
  };
};
export const deleteProductService = async (productId) => {
  const product = await ProductModel.findOneAndDelete({ _id: productId });
  return product;
};
