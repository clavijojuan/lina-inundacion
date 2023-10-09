const bcryptjs = require('bcryptjs');

const {
    Usuario
} = require('../models');

const register = async (req, res) => {
    const { 
        correo,
        nombre,
        contrasena,
        rol
    } = req.body;
    try {
        const usuario = new Usuario({
            correo,
            nombre,
            contrasena,
            rol
        });
    
        // encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.contrasena = bcryptjs.hashSync( contrasena, salt );

        await usuario.save();
        return res.status(200).json(usuario);

    } catch (error) {
        return res.status(500).json({
            msg: 'No se pudo crear el usuario'
        })
    }
}


module.exports = {
    register
}



