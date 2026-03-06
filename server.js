require ('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/database');
const orderRoutes = require('./src/routes/orderRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//Rotas
app.use('/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/order', orderRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
    await connectDB();

    console.log(`Server running on port ${PORT}`);
});
