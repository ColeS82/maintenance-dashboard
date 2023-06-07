const Maintenance = require('../models/maintenance.model');

const moment = require('moment');

function parseCycle(cycle) {
    const [amount, unit] = cycle.split(' ');
    return {amount: parseInt(amount, 10), unit};
}

function addTime(date, cycle) {
    const {amount, unit} = parseCycle(cycle);
    return moment(date).add(amount, unit).toDate();
}


exports.performMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.findById(req.params.id);
        // Calculate the next maintenance date based on the maintenance cycle
        const cycle = parseCycle(maintenance.maintenanceCycle);  // You'll need to implement parseCycle
        const nextMaintenanceDate = addTime(maintenance.lastMaintenanceDate, cycle);  // You'll need to implement addTime
        maintenance.lastMaintenanceDate = new Date();  // Set the last maintenance date to now
        maintenance.nextMaintenanceDate = nextMaintenanceDate;
        await maintenance.save();
        res.send(maintenance);
    } catch (error) {
        res.status(500).send(error);
    }
};
