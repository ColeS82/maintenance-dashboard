const db = require('./config/connection');
const app = require('./app');
const PORT = process.env.PORT || 5000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
    console.log('Database connection successful')

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}...`);
    });
});