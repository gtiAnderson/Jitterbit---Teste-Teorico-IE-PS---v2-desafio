const express = require('express');
const router = express.Router();
const { 
    createOrder, 
    getOrder, 
    listOrders, 
    updateOrder, 
    deleteOrder 
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/list', listOrders);
router.get('/:numeroPedido', getOrder);
router.put('/:numeroPedido', updateOrder);
router.delete('/:numeroPedido', deleteOrder);

module.exports = router;