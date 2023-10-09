const { convert } = require('geojson2shp')
const { v4: uuidv4 } = require('uuid');
const turf = require('@turf/turf');

const geojsonToFeature = ( geojson ) => {
    const combinedGeojson = turf.combine( geojson );
    const newGeojson = combinedGeojson.features[0];

    return newGeojson;
}

const addFeatureToGeojson = ( mainGeojson, feature ) => {
    mainGeojson.features.push( feature );

    return mainGeojson;
}

const inundationType = ( feature ) => {
    const geometryType = turf.getType( feature );

    if( geometryType === 'Polygon' ) return 'inundacion_poligono'
    else if( geometryType === 'Point' ) return 'inundacion_punto'
    else if( geometryType === 'LineString' ) return 'inundacion_linea'
    else if( geometryType === 'MultiPolygon' ) return 'inundacion_poligono'
    else if( geometryType === 'MultiPoint' ) return 'inundacion_punto'
    else if( geometryType === 'MultiLineString' ) return 'inundacion_linea'
}

const geoJsonToShp = async ( geojson, layerName ) => {
    let shpName = uuidv4();
    shpName = shpName.replaceAll('-', '')

    const path = `tmp/${ shpName }.zip`

    await convert( geojson, path, {
        layer: layerName,
        targetCrs: 4326
    });

    return path;
}

module.exports = {
    geoJsonToShp,
    inundationType,
    geojsonToFeature,
    addFeatureToGeojson
}