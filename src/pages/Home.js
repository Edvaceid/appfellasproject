// frontend/src/pages/Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightTicket from '../components/FlightTicket';
import ReservationPopup from '../components/ReservationPopup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Home.css';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('2024-09-24')); // Test için sabit tarih
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);

    // Backend URL'yi doğrudan belirtiyoruz
    const backendUrl = 'http://localhost:5000/api';

    const fetchFlights = async (date) => {
        setLoading(true);
        const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
        console.log(`Fetching flights for date: ${formattedDate}`);

        try {
            const response = await axios.get(`${backendUrl}/flights`, {
                params: { date: formattedDate }
            });
            console.log("Flights response data:", response.data);
            setFlights(response.data);
        } catch (error) {
            console.error('Error fetching flights:', error.message);
            setFlights([]);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchFlights(selectedDate);
    }, [selectedDate]);

    const handleReserve = (flight) => {
        setSelectedFlight(flight);
    };

    const closePopup = () => {
        setSelectedFlight(null);
    };

    return (
        <div className="home-page">
            <h2>Uçuş Ara</h2>
            <div className="date-picker-container">
                <DatePicker 
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                />
            </div>
            {loading ? (
                <p>Yükleniyor...</p>
            ) : (
                <div className="flights-list">
                    {flights.length > 0 ? (
                        flights.map(flight => (
                            <FlightTicket key={flight._id} flight={flight} onReserve={handleReserve} />
                        ))
                    ) : (
                        <p>Seçilen tarihte uçuş bulunmamaktadır.</p>
                    )}
                </div>
            )}
            {selectedFlight && (
                <ReservationPopup 
                    flight={selectedFlight} 
                    onClose={closePopup} 
                    backendUrl={backendUrl}
                />
            )}
        </div>
    );
};

export default Home;
