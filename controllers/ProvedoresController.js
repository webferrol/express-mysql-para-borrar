class Provedores {
    consultarProvedores (_, res) {
        res.send('Todos los provedores')
    }

    crearProvedor  (_, res) {
        res.send('Crear un provedor')
    }

    verDetalleprovedor (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun provedor',
            cod: id
        })
    }
    
    actualizarProvedor (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar provedor',
            cod: id
        })
    }

    elimarProvedor (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar provedor',
            cod: id
        })
    }


}


export default new Provedores()