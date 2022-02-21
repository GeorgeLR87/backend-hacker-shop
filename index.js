const express = require('express')
const app     = express()
const cors    = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')


connectDB()

app.use(cors())
app.use(express.json())

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))




app.listen(process.env.PORT, () => {
    console.log(`Server on PORT: http://localhost:${process.env.PORT}`);
})