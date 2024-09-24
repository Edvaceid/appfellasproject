// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// .env dosyasını yükleme
dotenv.config();

// Route'ları import etme
const flightsRoute = require('./routes/flights');
const reservationsRoute = require('./routes/reservations');

// Express uygulamasını oluşturma
const app = express();

// Port ayarı
const PORT = process.env.PORT || 5000;

// CORS ayarları
const corsOptions = {
    origin: 'http://localhost:3000', // Frontend'inizin URL'si
    optionsSuccessStatus: 200
};

// Middleware'leri kullanma
app.use(cors(corsOptions));
app.use(express.json());

// Route'ları kullanma
app.use('/api/flights', flightsRoute);
app.use('/api/reservations', reservationsRoute);

// Mongoose deprecation warning'ını gidermek için
mongoose.set('strictQuery', false);

// MongoDB bağlantısını gerçekleştirme
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error('Error: MONGODB_URI tanımlanmamış.');
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB\'ye bağlanıldı.');
    // Sunucuyu başlatma
    app.listen(PORT, () => {
        console.log(`Sunucu port ${PORT} üzerinde çalışıyor.`);
    });
})
.catch(err => {
    console.error('MongoDB bağlantı hatası:', err.message);
    process.exit(1);
});
