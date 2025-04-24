const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/AuthRoute');
const productRoutes = require('./routes/ProductRoute');
const orderRoutes = require('./routes/OrderRoute');
const cartRoutes = require('./routes/CartRoute');
const cors = require('cors');
const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
