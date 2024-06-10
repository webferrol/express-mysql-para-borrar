import express from 'express'
const router = express.Router()


router.get(
    '/',
    (_, res) => {
        res.send('Todos los artículos')
    }
)

router.post(
    '/',
    (_, res) => {
        res.send('Crear un artigo')
    }
)

router.route('/:codigo')
    .get((req, res) => {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun artigo',
            cod: id
        })
    })
    .delete((req, res) => {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar artigo',
            cod: id
        })
    })
    .put((req, res) => {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar artigo',
            cod: id
        })
    })




export default router