const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    nomenclature: {
        type: String,
        required: true,
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true,
    },
    model: {
        type: String,
        required: false,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    acquisitionDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Equipment', EquipmentSchema);