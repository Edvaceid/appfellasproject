// frontend/src/pages/MyFlights.js

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/MyFlights.css';
import { motion } from 'framer-motion';

const MyFlights = () => {
    const [email, setEmail] = useState('');
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const fetchReservations = async () => {
        if (!email) {
            setMessage('Lütfen email giriniz.');
            return;
        }

        setLoading(true);
        setMessage('');
        try {
            const response = await axios.get(`${backendUrl}/reservations`, {
                params: { email }
            });
            setReservations(response.data);
            if (response.data.length === 0) {
                setMessage('Hiç rezervasyonunuz bulunmamaktadır.');
            }
        } catch (error) {
            console.error('Error fetching reservations:', error.message);
            setMessage('Rezervasyonlar alınamadı.');
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/reservations/${id}`);
            setReservations(reservations.filter(reservation => reservation._id !== id));
            setMessage('Rezervasyon iptal edildi.');
        } catch (error) {
            console.error('Error deleting reservation:', error.message);
            setMessage('Rezervasyon iptal edilemedi.');
        }
    };

    return (
        <div className="my-flights-page">
            <h2>Rezervasyonlarım</h2>
            <div className="email-input-container">
                <input 
                    type="email" 
                    placeholder="Emailinizi giriniz" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={fetchReservations}>Göster</button>
            </div>
            {loading ? (
                <p>Yükleniyor...</p>
            ) : (
                <div className="reservations-list">
                    {message && <p>{message}</p>}
                    {reservations.map(reservation => (
                        <motion.div 
                            key={reservation._id}
                            className="reservation-card"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="reservation-info">
                                <h3>{reservation.airline} {reservation.flightNumber}</h3>
                                <p><strong>From:</strong> {reservation.departureAirport}</p>
                                <p><strong>To:</strong> {reservation.arrivalAirport}</p>
                                <p><strong>Departure:</strong> {new Date(reservation.departureTime).toLocaleString()}</p>
                                <p><strong>Arrival:</strong> {new Date(reservation.arrivalTime).toLocaleString()}</p>
                                <p><strong>Passenger:</strong> {reservation.passenger.firstName} {reservation.passenger.lastName}</p>
                                <p><strong>Email:</strong> {reservation.passenger.email}</p>
                                <p><strong>Phone:</strong> {reservation.passenger.phone}</p>
                            </div>
                            <button className="cancel-button" onClick={() => handleDelete(reservation._id)}>İptal Et</button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyFlights;
