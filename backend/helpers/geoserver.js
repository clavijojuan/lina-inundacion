const axios = require('axios');
const fs = require('fs');
const { grc } = require('../database/geoserver')

const outputFormats = {
    kml: "KML",
    shp: "shape-zip",
    geojson: "json"
}

const WFSPARAMS = ( layerName, format ) => {
    return new URLSearchParams({
      service: 'wfs',
      version: '1.0.0',
      request: 'GetFeature',
      typeNames: `INUNDACION:${ layerName }`,
      outputFormat: outputFormats[ format ]
    })
}

const getLayer = async ( layerName ) => {
    const url = `${ process.env.GEOSERVERURL }/wfs?` +  WFSPARAMS( layerName, 'geojson' );

    try {
        const { data } = await axios.get( url );
        return data;
    } catch (error) {
        throw new Error( error );
    }
}

const updateInundation = async ( shpPath, layerName, existLayer ) => {
    const url = `${ process.env.GEOSERVERURL }/rest/workspaces/INUNDACION/datastores/${ layerName }/file.shp`;
    const data = fs.readFileSync( shpPath );

    try {
        const config = {
            method: 'PUT',
            maxBodyLength: Infinity,
            url,
            headers: { 
              'Content-Type': 'application/zip'
            },
            data
        };

        if( existLayer ) await grc.datastores.deleteDataStore( 'INUNDACION', layerName, true )
        await axios.request(config);
        await grc.styles.assignStyleToLayer( 'INUNDACION', layerName, 'INUNDACION', layerName );

        fs.unlinkSync( shpPath );
        
        return true;
        
    } catch ( e ) {
        
        if( fs.existsSync( shpPath ) ) fs.unlinkSync( shpPath );
        
        throw new Error(' No se pudo actualizar la capa de inundación ');
    }
}


module.exports = {
    updateInundation,
    getLayer,
}