// backend/routes/flights.js

const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// GET /api/flights?date=YYYY-MM-DD
router.get('/', async (req, res) => {
    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ message: 'Date query parameter is required' });
    }

    try {
        const queryDate = new Date(date);
        if (isNaN(queryDate)) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        // Belirtilen tarihin UTC başlangıcı ve sonu
        const start = new Date(Date.UTC(queryDate.getUTCFullYear(), queryDate.getUTCMonth(), queryDate.getUTCDate(), 0, 0, 0));
        const end = new Date(Date.UTC(queryDate.getUTCFullYear(), queryDate.getUTCMonth(), queryDate.getUTCDate(), 23, 59, 59, 999));

        console.log(`Fetching flights for date: ${date}`);
        console.log(`Start: ${start.toISOString()}, End: ${end.toISOString()}`);

        // Tarih aralığında uçuşları bulma
        const flights = await Flight.find({
            departureDate: { $gte: start, $lte: end }
        });

        console.log(`Found ${flights.length} flights`);

        res.json(flights);
    } catch (error) {
        console.error('Error fetching flights:', error.message);
        res.status(500).json({ message: 'Error fetching flights' });
    }
});

module.exports = router;
