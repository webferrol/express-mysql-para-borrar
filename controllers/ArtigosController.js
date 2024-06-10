class Artigos {
    consultarArtigos (_, res) {
        res.send('Todos los artículos')
    }

    crearArtigo  (_, res) {
        res.send('Crear un artigo')
    }

    verDetalleArtigo (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun artigo',
            cod: id
        })
    }
    
    actualizarArtigo (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar artigo',
            cod: id
        })
    }

    elimarArtigo (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar artigo',
            cod: id
        })
    }


}


export default new Artigos()