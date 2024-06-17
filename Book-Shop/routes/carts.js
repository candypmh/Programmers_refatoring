const express = require('express');
const { addToCart, getCartItems, removeCartItem } = require('../controller/CartController');
const router = express.Router();
router.use(express.json());

router.post('/', addToCart);
router.get('/', getCartItems);
router.delete('/:id', removeCartItem);

module.exports = router;