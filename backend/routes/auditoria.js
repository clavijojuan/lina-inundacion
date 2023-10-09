const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const {
  validarTipoAuditoria,
  existeCorreo,
  validarUsuario,
  validarCorreo,
} = require('../helpers/db-validators');
const {
  crearAuditoria,
  obtenerAuditorias,
  obtenerUsuarios,
  obtenerRoles,
  crearUsuariodesdeAdmin,
  actualizarUsuariodesdeAdmin,
} = require('../controllers/auditoria');
const { esAdmin, validarRol } = require('../middlewares/validar-rol');

const router = Router();

// usuarios
router.get('/usuarios', [validarJWT, esAdmin], obtenerUsuarios);
router.post(
  '/usuarios',
  [
    validarJWT,
    esAdmin,
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check(
      'contrasena',
      'La contraseña debe ser de más de 6 caracteres'
    ).isLength({ min: 6 }),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo').custom(existeCorreo),
    check('rol', 'El rol no posee un id válido').isMongoId(),
    validarRol,
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  crearUsuariodesdeAdmin
);

router.patch(
  '/usuarios',
  [
    validarJWT,
    esAdmin,
    check('_id').custom(validarUsuario),
    check('correo', 'El correo es obligatorio').optional().not().isEmpty(),
    check('correo', 'El correo no es válido').optional().isEmail(),
    check('contrasena', 'La contraseña debe ser de más de 6 caracteres')
      .optional()
      .isLength({ min: 6 }),
    check('nombre', 'El nombre es obligatorio').optional().not().isEmpty(),
    check('rol', 'El rol es obligatorio').optional().not().isEmpty(),
    check('rol', 'El rol no posee un id válido').optional().isMongoId(),
    check('activo', 'El valor del campo activo no es válido')
      .optional()
      .isBoolean(),
    validarCampos,
  ],
  actualizarUsuariodesdeAdmin
);

// roles
router.get('/roles', [validarJWT, esAdmin], obtenerRoles);

// auditorias
router.get('/', [validarJWT, esAdmin], obtenerAuditorias);
router.post(
  '/',
  [
    validarJWT,
    check('tipo', 'El tipo de auditoria es obligatorio').not().isEmpty(),
    check('tipo', 'El tipado del campo tipo no es válido').isString(),
    check('tipo').custom(validarTipoAuditoria),
    check('mensaje', 'El mensaje de la auditoria es obligatorio')
      .not()
      .isEmpty(),
    check('mensaje', 'El tipado del campo mensaje no es válido').isString(),
    validarCampos,
  ],
  crearAuditoria
);

module.exports = router;
