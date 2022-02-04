const User = require('./../models/User')
const jwt  = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')



exports.create = async (req, res) => {    

    const {
        name,
        lastName,
        country,
        address,
        email,
        password
    } = req.body

   
    try {
        
        
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        
        const newUser = await User.create({
            name,
            lastName,
            country,
            address,
            email,
            password: hashedPassword
        })

        
        const payload = {
            user: {
                id: newUser._id
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn:360000
            },
            (error, token) => {
                if(error) throw error

                res.json({
                    msg: 'Token correctamente generado.',
                    data: token
                })
            }
        )       
    } catch (error) {
        res.status(500).json({
            msg: 'Hubo un error con la creación de usuario.',
            error: error
        })   
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const foundUser = await User.findOne({ email })

        if(!foundUser) {
            return res.status(400).json({
                msg: 'El usuario o la contraseña son incorrectos'
            })
        }

        const verifiedPass = await bcryptjs.compare(password, foundUser.password)

        if(!verifiedPass) {
            return await res.status(400).json({
                msg: 'El usuario o la contraseña no coinciden'
            })
        }

        const payload = {
            user: {
                id: foundUser.id
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 360000
            },
            (error, token) => {
                if(error) throw error

                res.json({
                    msg: 'Inicio de sesion exitoso.',
                    data: token
                })
            }
        )

        return

    } catch (error) {
        console.log(error) 
            res.status(500).json({
                msg: 'Hubo un problema con la autenticacion.',
                data: error
            })       
        
    }
}

exports.verifyToken = async (req, res) => {
    try {
        const foundUser = await User.findById(req.user.id).select('-password')

        return res.json({
            msg: 'Datos de usuario encontrados.',
            data: foundUser
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            msg: 'Hubo un error con el usuario'
        })
        
    }
}