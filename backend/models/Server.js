const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/mongodb');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: '/api/auth',
      usuarios: '/api/usuarios',
      reportes: '/api/reportes',
      auditorias: '/api/auditoria',
      certificado: '/api/certificado',
    };

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.options('*', cors());

    // cors
    this.app.use(cors());

    // json enabled
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.usuarios, require('../routes/usuarios'));
    this.app.use(this.paths.reportes, require('../routes/reportes'));
    this.app.use(this.paths.auditorias, require('../routes/auditoria'));
    this.app.use(this.paths.certificado, require('../routes/certificado'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ', this.port);
    });
  }
}

module.exports = {
  Server,
};
