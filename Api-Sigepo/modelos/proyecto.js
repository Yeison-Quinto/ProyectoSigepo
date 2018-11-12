const mongoose= require('mongoose');
const { Schema } = mongoose;

const proyecto = new Schema({
    nomProyecto: {type: String, require: true},
    tipoProyecto: {type: String},
    modalidad: {type: String, require: true},
    fCreacion: {type: String, require: true},
    fInicial: {type: String, require: true},
    fFInal: {type: String, require: true},
    estado: {type: String, require: true},
    objGeneral: {type: String, require: true},
    objEspecifico: {type: String, require: true},
    nomAsesor: {type: String, require: true},
    nomResponsable: {type: String, require: true},
    nomParticipante: {type: String, require: true},
    Rol: {type: String, require: true},
    dependencia: {type: String, require: true},
});

module.exports = mongoose.model('proyectoP', proyecto);

