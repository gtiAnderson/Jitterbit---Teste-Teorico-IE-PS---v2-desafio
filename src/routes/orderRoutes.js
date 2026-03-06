const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Adicionando o authMiddleware antes de cada controller para proteger as rotas
router.post('/', authMiddleware, orderController.createOrder);
router.get('/list', authMiddleware, orderController.listOrders);
router.get('/:numeroPedido', authMiddleware, orderController.getOrder);
router.put('/:numeroPedido', authMiddleware, orderController.updateOrder);
router.delete('/:numeroPedido', authMiddleware, orderController.deleteOrder);

module.exports = router;