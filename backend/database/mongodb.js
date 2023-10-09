const mongoose = require('mongoose');
require('colors');

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.MONGO_ATLAS )
        console.log('Base de datos online'.green)
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarse a base de datos'.red);
    }
}

module.exports = {
    dbConnection
}