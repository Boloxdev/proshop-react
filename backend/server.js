import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config();

const app = express();

connectDB()

app.get('/', (req, res) => {
    res.send('API RUNNING')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT} on ${process.env.NODE_ENV} mode`));