const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
// const maintenanceRoutes = require('./routes/maintenance');
// const equipmentRoutes = require('./routes/equipment');

const app = express();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

//mount routers
// app.use('/api/maintenance', maintenanceRoutes);
// app.use('/api/equipment', equipmentRoutes);

//error handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('something went wrong')
});

module.exports = app;