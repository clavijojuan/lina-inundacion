const html_to_pdf = require('html-pdf-node');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const generarCertificado = async (req, res) => {
  try {
    const {
      nombre,
      correo,
      comuna_predio,
      barrio_predio,
      urbanizacion_predio,
      numero_predio,
      amenaza_predio,
      condicion_amenaza_predio,
      condicion_riesgo_predio,
      afectacion_morfodinamica,
    } = req.body;

    const ruta = `tmp/certificado_${
      numero_predio === 'N/A' ? 'temporal' : numero_predio
    }.pdf`;
    const buffer = fs.readFileSync('assets/html/plantilla.html');

    moment.locale('es');
    const fecha = moment().format('MMMM D YYYY');

    let html = buffer.toString();

    html = html.replace('FECHA_DOCUMENTO', fecha.toUpperCase());
    html = html.replace('NOMBRE_USUARIO', nombre);
    html = html.replace('CORREO_USUARIO', correo);
    html = html.replace('COMUNA_PREDIO', comuna_predio);
    html = html.replace('BARRIO_PREDIO', barrio_predio);
    html = html.replace('URBANIZACION_PREDIO', urbanizacion_predio);
    html = html.replace('NUMERO_PREDIO', numero_predio);
    html = html.replace('AMENAZA_PREDIO', amenaza_predio);
    html = html.replace('CONDICION_AMENAZA_PREDIO', condicion_amenaza_predio);
    html = html.replace('CONDICION_RIESGO_PREDIO', condicion_riesgo_predio);
    html = html.replace('PROCESOS_MORFO', afectacion_morfodinamica);

    const pdfBuffer = await html_to_pdf.generatePdf(
      { content: html },
      {}
      //   { format: 'A4', scale: 0.7, pageRanges: '1-1' }
    );

    fs.writeFileSync(ruta, pdfBuffer);
    const filePath = path.join(__dirname, '../', ruta);
    res.sendFile(filePath);

    setTimeout(() => {
      fs.unlinkSync(ruta);
    }, 1000);

    return;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'No se pudo generar el certificado' });
  }
};

module.exports = {
  generarCertificado,
};
