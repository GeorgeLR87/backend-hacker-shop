const jwt = require('jsonwebtoken')

const decrypt = async (req, res, next) => {
    
    const token = req.header('x-auth-token')

    if(! token){
        return res.status(401).json({
            msg: 'No hay token, permitido no válido'
        })
    }

    try {
        const openToken = await jwt.verify(token, process.env.SECRET)       

        req.user = openToken.user

        next()
    } catch (error) {
        console.log(error)

        res.json(
            {
                msg: 'Hubo un error en el token.'
            }
        )
    }
}

module.exports = decrypt