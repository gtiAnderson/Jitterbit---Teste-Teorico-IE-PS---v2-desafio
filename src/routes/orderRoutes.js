const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, orderController.createOrder);
router.get('/list', authMiddleware, orderController.listOrders);
router.get('/:numeroPedido', authMiddleware, orderController.getOrder);
router.put('/:numeroPedido', authMiddleware, orderController.updateOrder);
router.delete('/:numeroPedido', authMiddleware, orderController.deleteOrder);

module.exports = router;