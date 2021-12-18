const mongoose = require('mongoose');
const {Schema} = mongoose;

const AvanceSchema = new Schema({
    idProyecto: {type:String, required:false},
    fecha: {type:String, required:false},
    descripcion: {type:String, required:false},
    observacion: {type:String, required:false},
    idEstudiante: {type:String, required:false},
    idLider: {type:String, required:false}
});

module.exports = mongoose.model('Avance', AvanceSchema); 