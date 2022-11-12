const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {

    console.log('el proyecto esta corriendo en el puerto -> ',process.env.PORT)

});
mongoose.set('useFindAndModify',false);
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);

mongoose.connect(process.env.DB, (err)=>{
    if(err){
        return console.log('Error al conectar a la base de datos',err);
    }
    return console.log('conectado a la base de datos')
})
