import { loginUser, logout, registerUser } from './auth';
import { loadProductsFromCart } from './cart/load-products-from-cart.action';
import { createUpdateProduct } from './products/create-update-product.action';
import { getProductBySlug } from './products/get-product-by-slug.action';
import { getProductsByPage } from './products/get-products-by-page.action';
import { deleteProductImage } from './products/delete-product-image.action';

export const server = {
  // actions

  // Auth
  loginUser,
  logout,
  registerUser,

  // Products
  getProductsByPage,
  getProductBySlug,

  // Cart
  loadProductsFromCart,

  // Admin
  createUpdateProduct,
  deleteProductImage,
};
