const mongoose= require('mongoose');
const { Schema } = mongoose;

const login = new Schema({
    usuario: {type: String, require: true},
    contraseña: {type: String, require: true}
});

module.exports = mongoose.model('proyectoL', login);