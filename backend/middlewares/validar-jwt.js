const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const validarJWT = async ( req = request, res = response, next ) => {
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    try {
        const { _id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        const usuario = await Usuario.findById( _id ).populate('rol');

        if( !usuario ){
            return res.status(401).json({
                msg: 'Usuario no existe'
            })
        }

        if( !usuario.activo ){
            return res.status(401).json({
                msg: 'Usuario inactivo'
            })
        }

        req.usuario = usuario;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validarJWT
}