
const Product = require('./../models/Product')

exports.create = async (req, res) => {    

   const {
       name,
       price,
       image
   } = req.body

   try {
       const newProducto = await Product.create({
           name,
           price,
           image
       })

       res.json({
           msg: 'Producto creado con exito',
           data:  newProducto
       })

   } catch (error) {
       res.status(500).json({
           msg: 'Hubo un error creando el producto',
           error: error
       })       
   }
}

exports.readAll = async (req, res) => {
    try {
        const products = await Product.find({})

        res.json({
            msg: 'Productos obtenidos con exito',
            data:  products
        })
    } catch (error) {
        res.status(500)({
            msg: 'Hubo un error obteniendo los datos',
            error: error
        })           
    }
}

exports.readOne = async (req, res) => {

    const { id } = req.params

    try {
        const product = await Product.findById(id)
        
        res.json({
            msg: 'Producto obtenido con exito',
            data: product
        })
        
    } catch (error) {
        res.status(500)({
            msg: 'Hubo un error obteniendo los datos',
            error: error
        })
    }
}

exports.edit = async (req, res) => {
    const { id } = req.params

    const {
        name,
        price,
        image
    } = req.body

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                price,
                image
            },
            {new: true}
        )
        res.json({
            msg: 'Producto actualizado con exito',
            data: updatedProduct
        })

        
    } catch (error) {
        res.status(500)({
            msg: 'Hubo un error con la actualizacion del producto',
            error: error
        })
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params

    try {
        const deletedProduct = await Product.findByIdAndRemove({_id: id})

        res.json({
            msg: 'Producto borrado con exito',
            data: deletedProduct
        })
        
    } catch (error) {
        res.status(500)({
            msg: 'Hubo un error borrando el producto',
            error: error
        })
    }
}
