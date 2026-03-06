require ('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/database');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();
app.use(express.json());

//Rotas
app.use('/order', orderRoutes);


const PORT = process.env.MONGODB_URL || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
