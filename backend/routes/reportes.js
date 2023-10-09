const { Router } = require('express');
const {
  crearReporte,
  filtrarReporte,
  obtenerFechasReporte,
  obtenerReporte,
} = require('../controllers/reportes');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCorreo } = require('../helpers/db-validators');
const { existPublishedLayer } = require('../middlewares/geo');

const router = Router();

router.get('/reporte/:id', [validarJWT], obtenerReporte);

router.post(
  '/',
  [
    validarJWT,
    check('usuario', 'El usuario no es valido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('cedula', 'La cèdula es obligatoria').not().isEmpty(),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    check('correo').custom(validarCorreo),
    check('evento', 'El evento es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('lugar', 'El lugar es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('celular', 'Número de caracteres invalido').isLength({
      min: 10,
      max: 10,
    }),
    check('geojson', 'La geometría es obligatoria').not().isEmpty(),
    existPublishedLayer,
    validarCampos,
  ],
  crearReporte
);

router.get('/filter', filtrarReporte);

router.get('/fechas', obtenerFechasReporte);

module.exports = router;
