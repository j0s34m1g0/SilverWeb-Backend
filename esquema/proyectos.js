const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProyectoSchema = new Schema({
  nombre: { type: String, required: false },
  oGenerales: { type: String, required: false },
  oEspecificos: { type: String, required: false },
  presupuesto: { type: String, required: false },
  fechaInicio: { type: String, required: false },
  fechaFin: { type: String, required: false },
  idLider: { type: String, required: false },
  estado: { type: String, required: false },
  fase: { type: String, required: false }
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);
