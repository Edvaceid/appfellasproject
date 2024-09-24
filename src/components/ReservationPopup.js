// frontend/src/components/ReservationPopup.js

import React, { useState } from 'react';
import '../styles/ReservationPopup.css';
import { motion } from 'framer-motion';
import axios from 'axios';

const ReservationPopup = ({ flight, onClose, backendUrl, refreshReservations }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
            setError('Lütfen tüm alanları doldurun.');
            return;
        }

        // Submit reservation
        try {
            await axios.post(`${backendUrl}/reservations`, {
                flight,
                passenger: formData
            });

            setSuccess('Rezervasyon başarılı!');
            setError('');

            // Optionally, refresh reservations
            if (refreshReservations) {
                refreshReservations();
            }

            // Close popup after a delay
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (err) {
            console.error('Error making reservation:', err.message);
            setError('Rezervasyon yapılamadı.');
            setSuccess('');
        }
    };

    return (
        <div className="popup-overlay">
            <motion.div 
                className="popup-content"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h2>Rezervasyon Yap</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Ad" 
                        value={formData.firstName} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Soyad" 
                        value={formData.lastName} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Telefon Numarası" 
                        value={formData.phone} 
                        onChange={handleChange}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <div className="popup-buttons">
                        <button type="submit" className="submit-button">Rezervasyon Yap</button>
                        <button type="button" className="close-button" onClick={onClose}>Kapat</button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default ReservationPopup;
