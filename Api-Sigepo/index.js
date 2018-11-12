const express= require('express');
const morgan= require('morgan');
const app = express();

const { mongoose } = require ('./datos');

//seting
app.set('port', process.env.PORT || 3000 );

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Router
app.use('/api/login',require('./routes/login.routes'));
app.use('/api/proyecto',require('./routes/proyecto.routes'));


//Staring the server

app.listen(app.get('port'), () => {
    console.log('server en puerto ', app.get('port'));
});