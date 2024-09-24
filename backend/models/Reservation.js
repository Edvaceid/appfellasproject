// backend/models/Reservation.js

const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    flightId: String,
    airline: String,
    flightNumber: String,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    date: String,
    passenger: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
