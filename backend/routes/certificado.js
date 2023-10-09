const { Router } = require('express');
const { generarCertificado } = require('../controllers/certificado');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/', [validarJWT], generarCertificado);

module.exports = router;
