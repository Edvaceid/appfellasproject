// frontend/src/components/FlightTicket.js

import React from 'react';
import '../styles/FlightTicket.css';
import { motion } from 'framer-motion';

const FlightTicket = ({ flight, onReserve }) => {
    const handleReserve = () => {
        onReserve(flight);
    };

    return (
        <motion.div 
            className="flight-ticket"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flight-info">
                <div className="flight-details">
                    <h3>{flight.airline} {flight.flightNumber}</h3>
                    <p><strong>From:</strong> {flight.departureAirport}</p>
                    <p><strong>To:</strong> {flight.arrivalAirport}</p>
                </div>
                <div className="flight-times">
                    <p><strong>Departure:</strong> {new Date(flight.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p><strong>Arrival:</strong> {new Date(flight.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
            </div>
            <button className="reserve-button" onClick={handleReserve}>Rezervasyon Yap</button>
        </motion.div>
    );
};

export default FlightTicket;
