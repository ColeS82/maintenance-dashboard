const mongoose  = require('mongoose');
const { Schema } = mongoose;

const MaintenanceSchema = new mongoose.Schema({
    equipment: {
        type: Schema.Types.ObjectId,
        ref: 'Equipment',
        required: true,
    },
    maintenanceCycle: {
        type: String,
        required: true,
    },
    lastMaintenanceDate: {
        type: Date,
        required: true,
    },
    nextMaintenanceDate: {
        type: Date,
        required: true,
    },
    
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);


