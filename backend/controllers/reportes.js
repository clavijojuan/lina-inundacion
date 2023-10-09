const { geoJsonToShp, addFeatureToGeojson } = require('../helpers/geo');
const { updateInundation, getLayer } = require('../helpers/geoserver');
const { Reporte, Auditoria } = require('../models');
const mongoose = require('mongoose');

const obtenerReporte = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reporte = await Reporte.findById(id);
    return res.json(reporte);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error en el servidor',
    });
  }
};

const crearReporte = async (req, res) => {
  const { usuario } = req;
  const { existLayer, layerToUpload, geojson, ...rest } = req.body;
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    let geojsonToPublish;

    const geojsonToSave =
      geojson.type === 'Feature' ? geojson : geojson.features[0];
    const reporte = new Reporte({
      ...rest,
      geojson: JSON.stringify(geojsonToSave),
    });

    if (existLayer) {
      geojson.properties.inundacion = reporte._id.toString();
      const geojsonLayer = await getLayer(layerToUpload);
      geojsonToPublish = addFeatureToGeojson(geojsonLayer, geojson);
    } else {
      geojson.features[0].properties.inundacion = reporte._id.toString();
      geojsonToPublish = geojson;
    }

    const shpPath = await geoJsonToShp(geojsonToPublish, layerToUpload);

    await updateInundation(shpPath, layerToUpload, existLayer);
    await reporte.save();

    // Guardar auditoria
    const auditoria = new Auditoria({
      correo: usuario.correo,
      tipo: 'Reporte de evento',
      mensaje: `El usuario de correo ${usuario.correo} ha reportado un evento`,
      inundacion: reporte._id,
    });

    await auditoria.save();

    await session.commitTransaction();

    return res.status(200).json(reporte);
  } catch (error) {
    console.log(error);
    await session.abortTransaction();

    return res.status(500).json({
      msg: 'Error en el servidor',
    });
  }
};

const filtrarReporte = async (req, res) => {
  try {
    const { fechas = '[]' } = req.query;

    const [startDate, endDate] = JSON.parse(fechas);

    const reportes = await Reporte.find({
      fecha: {
        $gt: startDate,
        $lt: endDate,
      },
    }).select('__id');

    return res.json({
      reportes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error en el servidor',
    });
  }
};

const obtenerFechasReporte = async (req, res) => {
  try {
    const reportes = await Reporte.find().select('fecha');

    const fechas = reportes.map((reporte) => new Date(reporte.fecha));

    return res.json({
      startDate: new Date(Math.min.apply(null, fechas)),
      finishDate: new Date(Math.max.apply(null, fechas)),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error en el servidor',
    });
  }
};

module.exports = {
  crearReporte,
  filtrarReporte,
  obtenerFechasReporte,
  obtenerReporte,
};
