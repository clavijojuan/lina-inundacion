const { Router } = require('express');
const { check } = require('express-validator');

const {
  login,
  renew,
  googleLogin,
  unknowLogin,
} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarCorreo } = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarRol } = require('../middlewares/validar-rol');

const router = Router();

router.post(
  '/',
  [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(validarCorreo),
    check(
      'contrasena',
      'La contraseña debe ser de más de 6 caracteres'
    ).isLength({ min: 6 }),
    validarCampos,
  ],
  login
);

router.post(
  '/unknow',
  [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('celular', 'El celular debe tener 10 caracteres').isLength(10),
    validarCampos,
  ],
  unknowLogin
);

router.post(
  '/google',
  [
    check('id_token', 'Token de google es necesario').not().isEmpty(),
    validarRol,
    validarCampos,
  ],
  googleLogin
);

router.get('/renew', [validarJWT], renew);

module.exports = router;
