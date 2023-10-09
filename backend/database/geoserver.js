const grcImport = require('geoserver-node-client');
const GeoServerRestClient = grcImport.GeoServerRestClient;

const url = process.env.GEOSERVERURL+'/rest';
const user = process.env.GEOSERVERUSER;
const pw = process.env.GEOSERVERPASSWORD;
const grc = new GeoServerRestClient(url, user, pw);

module.exports = {
    grc
}