const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = 'mongodb+srv://yogeshtiwari:FVepW1UGes8KURje@cluster0.jnxmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' // For Atlas



// seting up a mongoconnection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongoDb');

})
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export
module.exports = db;