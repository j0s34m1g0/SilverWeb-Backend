const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    correo: {type:String, required:false},
    identificacion: {type:String, required:false},
    nombre: {type:String, required:false}, 
    tipo: {type:String, required:false},
    password: {type:String, required:false},
    estado: {type:String, required:false},
    editBy: {type:String, required:false},
});

module.exports = mongoose.model('Usuario', UsuarioSchema);