// const express = require('express') // commonjs
import express from 'express' // ES modules
import provedorRouter from './routers/provedoresRouters.js'
import { PORT, ROUTERS } from './constants.js'

const app = express()


app.use(ROUTERS.vendors, provedorRouter)

// petición de Read que llege al servidor
app.get( // Lectura
    '/', // rutas estática
    (_, res) => {
        res.status(200).send('Home')
    }
)







app.listen(
    PORT,
    () => {
        console.log('Servidor abierto en puerto ' + PORT)
    }
)
