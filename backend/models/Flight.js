// backend/models/Flight.js

const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    airline: { type: String, required: true },
    flightNumber: { type: String, required: true },
    departureAirport: { type: String, required: true },
    arrivalAirport: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    departureDate: { type: Date, required: true }
}, { collection: 'flights' }); // Koleksiyon adını açıkça belirtme

module.exports = mongoose.model('Flight', FlightSchema);
