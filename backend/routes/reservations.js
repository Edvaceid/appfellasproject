// backend/routes/reservations.js

const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// POST /api/reservations
router.post('/', async (req, res) => {
    const { flight, passenger } = req.body;

    if (!flight || !passenger) {
        return res.status(400).json({ message: 'Flight and passenger information are required' });
    }

    try {
        const newReservation = new Reservation({
            flightId: flight.id,
            airline: flight.airline,
            flightNumber: flight.flightNumber,
            departureTime: flight.departureTime,
            arrivalTime: flight.arrivalTime,
            departureAirport: flight.departureAirport,
            arrivalAirport: flight.arrivalAirport,
            date: flight.date,
            passenger
        });

        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        console.error('Error saving reservation:', error.message);
        res.status(500).json({ message: 'Error saving reservation' });
    }
});

// GET /api/reservations?email=example@example.com
router.get('/', async (req, res) => {
    const { email } = req.query;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const reservations = await Reservation.find({ 'passenger.email': email });
        res.json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error.message);
        res.status(500).json({ message: 'Error fetching reservations' });
    }
});

// DELETE /api/reservations/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await Reservation.findById(id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        // Optionally, check if the reservation is in the past
        const currentDate = new Date();
        const departureDate = new Date(reservation.departureTime);
        if (departureDate < currentDate) {
            return res.status(400).json({ message: 'Cannot cancel past reservations' });
        }

        await Reservation.findByIdAndDelete(id);
        res.json({ message: 'Reservation cancelled successfully' });
    } catch (error) {
        console.error('Error deleting reservation:', error.message);
        res.status(500).json({ message: 'Error deleting reservation' });
    }
});

module.exports = router;
