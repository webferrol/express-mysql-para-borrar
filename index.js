// const express = require('express') // commonjs
import express from 'express' // ES modules

import artigosRouter from './routers/artigosRouters.js'
import provedorRouter from './routers/provedoresRouters.js'

import { PORT } from './constants.js'
const app = express()


// Rutas
app.get(
    '/',
    (_, res) => {
        res.status(200).send("Home")
    }   
)

app.use('/artigos',artigosRouter)
app.use('/provedores',provedorRouter)




app.listen(
    PORT,
    () => {
        console.log('Servidor abierto en puerto ' + PORT)
    }
)
