// ./server/index.js

// 1. Importaciones
const express = require('express')
const app     = express()

require('dotenv').config()
const connectDB = require('./config/db')

// 2. Middlewares

//Base de Datos
connectDB()
//Todas Las Peticiones y respuestas se manejan en protocolo JSON
app.use(express.json())


// 3. Rutas


// 4. Server
app.listen(process.env.PORT, () => {
    console.log(`Server on PORT: http://localhost:${process.env.PORT}`);
})