import express from 'express'
import artigosController from '../controllers/ArtigosController.js'

const router = express.Router()

router.get(
    '/',
    artigosController.consultarArtigos 
)

router.post(
    '/',
   artigosController.crearArtigo
)

router.route('/:codigo')
    .get(artigosController.verDetalleArtigo)
    .delete(artigosController.elimarArtigo)
    .put(artigosController.actualizarArtigo)


export default router