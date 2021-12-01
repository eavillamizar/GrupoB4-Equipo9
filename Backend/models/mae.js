const mongoose = require('mongoose');

const maeSchema = mongoose.Schema({
    id: {type: String, require:true},
    codigo: {type: String},
    nombre: {type: String, require:true},
});

module.exports = mongoose.model("Mae", maeSchema);