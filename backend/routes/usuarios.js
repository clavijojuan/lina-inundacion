const { Router } = require('express');
const { check } = require('express-validator');

const { register } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeCorreo } = require('../helpers/db-validators');
const { validarRol } = require('../middlewares/validar-rol');

const router = Router();

router.post(
  '/',
  [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check(
      'contrasena',
      'La contraseña debe ser de más de 6 caracteres'
    ).isLength({ min: 6 }),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo').custom(existeCorreo),
    validarRol,
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  register
);

module.exports = router;
