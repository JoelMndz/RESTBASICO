const path = require('path');
const {PORT} = require('../config');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server{

  constructor(){
    this.app = express();
    this.app.set('port',PORT);
    this.userPath = '/api/users'
    
    //Middlewares
    this.middlewares()

    //Rutas
    this.routes();
  }

  routes(){
    const {UserRoute} = require('../routes');
    this.app.use(this.userPath,UserRoute);
  }

  middlewares(){
    this.app.use(express.static(path.join(__dirname,'../public')))
    this.app.use(cors());
    this.app.use(express.json()); 
    this.app.use(morgan('dev'))   
  }

  listen(){
    this.app.listen(this.app.get('port'),()=>{
      console.log(`server corriendo en el puerto ${this.app.get('port')}`);
    })
  }
}

module.exports = new Server();