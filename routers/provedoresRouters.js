import express from 'express'
const router = express.Router()


router.get(
    '/',
    (_, res) => {
        res.send('Todos los provedores')
    }
)

router.post(
    '/',
    (_, res) => {
        res.send('Crear un provedor')
    }
)

router.route('/:codigo')
    .get((req, res) => {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun provedor',
            cod: id
        })
    })
    .delete((req, res) => {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar provedor',
            cod: id
        })
    })
    .put((req, res) => {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar provedor',
            cod: id
        })
    })




export default router