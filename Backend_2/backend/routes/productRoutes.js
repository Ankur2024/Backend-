import express from 'express';
import { getAllProducts, getProductById, getProductsByCategory, addProduct, deleteProduct } from '../controller/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.get('/products/category/:category', getProductsByCategory);
router.post('/products', addProduct);
router.delete('/products/:id', deleteProduct);

export default router;