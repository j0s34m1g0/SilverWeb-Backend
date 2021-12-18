const mongoose = require('mongoose');
const {Schema} = mongoose;

const InscripcionSchema = new Schema({
    idProyecto: {type:String, required:false},
    idEstudiante: {type:String, required:false},
    estado: {type:String, required:false},
    fechaIngreso: {type:String, required:false},
    fechaEgreso: {type:String, required:false}
});

module.exports = mongoose.model('Inscripcion', InscripcionSchema) 