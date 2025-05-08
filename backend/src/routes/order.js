const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const limiter = require('../middlewares/limiter');

router.post('/orders', limiter, orderController.createOrder);
router.get('/orders/:userId', limiter, orderController.getOrdersByUser);

module.exports = router;