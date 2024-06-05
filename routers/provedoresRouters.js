import express from "express"

const router = express.Router()

router.get( // Read
    '/',
    (_, res) => {
        res.status(200).json({
            message: 'Listado de provedores'
        })
    }
)


router.post( // Create
    '/',
    (_, res) => {
        res.status(200).json({
            message: 'Crear provedor'
        })
    }
)

router.get( // Read
    '/:id',
    (req, res) => {
        res.status(200).json({
            message: 'Detalle de un provedor',
            cod: req.params.id
        })
    }
)

router.delete( // Delete
    '/:id',
    (req, res) => {
        res.status(200).json({
            message: 'Eliminar provedor',
            cod: req.params.id
        })
    }
)

router.put( // Updated
    '/:id',
    (req, res) => {
        res.status(200).json({
            message: 'Actualizar provedor',
            cod: req.params.id
        })
    }
)

export default router