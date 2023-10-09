const turf = require('@turf/turf');
const { grc } = require('../database/geoserver');
const { inundationType, geojsonToFeature } = require('../helpers/geo');

const existPublishedLayer = async ( req, res, next ) => {
    const { geojson } = req.body;
    const feature = geojsonToFeature( JSON.parse( geojson ) );
    const layerToUpload = inundationType( feature );

    const existLayer = await grc.layers.get( 'INUNDACION', layerToUpload );

    if( !existLayer ) req.body.geojson = turf.combine( JSON.parse( geojson ) );
    else req.body.geojson = feature;

    req.body.existLayer = existLayer;
    req.body.layerToUpload = layerToUpload;

    next();
}


module.exports = {
    existPublishedLayer
}