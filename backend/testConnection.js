// backend/testConnection.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// .env dosyasını yükleme
dotenv.config();

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
    console.log('MongoDB\'ye başarıyla bağlanıldı.');
    mongoose.connection.close();
})
.catch(err => {
    console.error('MongoDB bağlantı hatası:', err.message);
    process.exit(1);
});
