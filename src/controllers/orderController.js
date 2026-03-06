const Order = require('../models/Order');
const { mapOrderToDbFormat } = require('../utils/orderMapper');

const createOrder = async (req, res) => {
    try {
        const mappedData = mapOrderToDbFormat(req.body);
        
        const existingOrder = await Order.findOne({ orderId: mappedData.orderId });
        if (existingOrder) return res.status(409).json({ error: 'Pedido já existe' });

        const newOrder = new Order(mappedData);
        await newOrder.save();
        
        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno', details: error.message });
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.numeroPedido });
        if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });
        
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno', details: error.message });
    }
};

const listOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno', details: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const mappedData = mapOrderToDbFormat(req.body);

        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: req.params.numeroPedido },
            mappedData,
            { new: true }
        );

        if (!updatedOrder) return res.status(404).json({ error: 'Pedido não encontrado' });
        
        return res.status(200).json(updatedOrder);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno', details: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findOneAndDelete({ orderId: req.params.numeroPedido });
        
        if (!deletedOrder) return res.status(404).json({ error: 'Pedido não encontrado' });
        
        return res.status(200).json({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno', details: error.message });
    }
};

module.exports = { createOrder, getOrder, listOrders, updateOrder, deleteOrder };