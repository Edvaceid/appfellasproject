Flight Reservation Sistemi
Node.js/Express tabanli backend ve React frontend kullanilarak gelistirilmis, MongoDB Atlas veri tabani ile desteklenen kapsamli bir uçus rezervasyon sistemidir. Bu uygulama, kullanicilarin belirli tarihlerde uçus aramasina, mevcut uçuslari görmesine ve sorunsuz bir sekilde rezervasyon yapmasina olanak tanir.

Icerik Tablosu
Ozellikler
Kullanilan Teknolojiler
On Kosullar
Kurulum
Backend Kurulumu
Frontend Kurulumu
Konfigürasyon
Ortam Degiskenleri
Veri Tabani Kurulumu
MongoDB Compass ile Veri Import Etme
Uygulamayi Calistirma
Backend Sunucusunu Baslatma
Frontend Sunucusunu Baslatma
API Dokumantasyonu
Tarih ile Ucus Getirme
Rezervasyon Olusturma
Sorun Giderme
Projeye Katkida Bulunma
Lisans
Iletisim
Ozellikler
Ucus Arama: Kullanicilar belirli bir tarih secerek mevcut uçuslari arayabilir.
Ucus Listeleme: Hangi havayolu, ucus numarasi, kalkis ve varis havaalani, kalkis ve varis saatleri gibi detaylarla uçus listesini gormek.
Rezervasyon: Kullanicilar secilen bir uçus icin rezervasyon yapabilir.
Duyarlı Tasarım: Cihazlar arasinda optimal kullanici deneyimi saglar.
Kullanilan Teknolojiler

Backend:
Node.js
Express.js
MongoDB Atlas
Mongoose
Cors
Dotenv

Frontend:
React.js
Axios
React DatePicker
CSS
On Kosullar
Projenin basarili bir sekilde kurulum ve calistirma adimlarini takip edebilmek icin asagidaki on kosullara sahip olmalisiniz:

Node.js (v14 veya sonrasi)
npm veya yarn
MongoDB Atlas hesabı
Git (istege bagli, versiyon kontrolu icin)
Kurulum
Backend Kurulumu

Backend Dizini'ne Gitme:
cd backend

Bagimliliklari Yükleme:
npm install

veya yarn kullanarak:
yarn install

Frontend Kurulumu

Frontend Dizini'ne Gitme:
cd frontend

Bagimliliklari Yükleme:
npm install

veya yarn kullanarak:
yarn install

Konfigürasyon

Ortam Degiskenleri

Hem backend hem de frontend tarafinda konfigürasyon icin ortam degiskenlerine ihtiyaciniz var. Aşağıda, backend ve frontend dizinlerinde .env dosyalari oluşturmak icin adimlari bulabilirsiniz.

Backend .env Kurulumu

Backend Dizini'ne Gitme:
cd backend

Bir .env Dosyasi Olusturma:

backend dizini icinde .env adinda bir dosya olusturun ve asagidaki degiskenleri ekleyin:
PORT=5000
MONGODB_URI=mongodb+srv://kullaniciadi:sifre@cluster0.mongodb.net/flight-reservation?retryWrites=true&w=majority

Not: MONGODB_URI degerini kendi MongoDB Atlas baglanti string'iniz ile degistirin.

Frontend .env Kurulumu

Frontend Dizini'ne Gitme:
cd frontend

Bir .env Dosyasi Olusturma:

frontend dizini icinde .env adinda bir dosya olusturun ve asagidaki degiskeni ekleyin:
REACT_APP_API_URL=http://localhost:5000/api

Not: Backend sunucunuz farkli bir portta veya domain'de calisiyorsa, REACT_APP_API_URL degerini buna gore guncelleyin.

Veri Tabani Kurulumu
MongoDB Compass ile Veri Import Etme
Ucus verilerini veri tabanina eklemek icin asagidaki adimlari takip edin.

JSON Dosyasini Hazirla:

Masaüstunde example.json adinda bir dosya olusturun ve asagidaki icerigi ekleyin:

[
    {
        "airline": "Turkish Airlines",
        "flightNumber": "TK123",
        "departureAirport": "IST",
        "arrivalAirport": "JFK",
        "departureTime": "2024-09-24T14:00:00Z",
        "arrivalTime": "2024-09-24T18:00:00Z",
        "departureDate": "2024-09-24T00:00:00Z"
    },
    {
        "airline": "Lufthansa",
        "flightNumber": "LH456",
        "departureAirport": "FRA",
        "arrivalAirport": "LAX",
        "departureTime": "2024-09-25T10:00:00Z",
        "arrivalTime": "2024-09-25T14:00:00Z",
        "departureDate": "2024-09-25T00:00:00Z"
    },
    {
        "airline": "British Airways",
        "flightNumber": "BA789",
        "departureAirport": "LHR",
        "arrivalAirport": "CDG",
        "departureTime": "2024-09-26T09:00:00Z",
        "arrivalTime": "2024-09-26T11:00:00Z",
        "departureDate": "2024-09-26T00:00:00Z"
    }
]

Onemli Notlar:

Tarih Formatı: departureTime, arrivalTime ve departureDate alanlari ISO 8601 formatinda (YYYY-MM-DDTHH:MM:SSZ) olmali.
Düzgün JSON Yapisi: JSON dosyasinin bir dizi ([]) icinde gecerli JSON objeleri ({}) icermesi gerekmekte. Her objenin sonuna virgul (,) koymamaya dikkat edin, son objeden sonra virgul olmamalidir.

MongoDB Compass'i Aç ve Baglan:
MongoDB Compass uygulamasini açin.
MONGODB_URI baglanti string'inizi kullanarak cluster’a baglanin.

Veritabani ve Koleksiyon Secme veya Olusturma:
flight-reservation veritabani yoksa olusturun.
flights koleksiyonu yoksa olusturun.

JSON Verisini Import Etme:
flights koleksiyonunu secin.

Sag tiklayin ve "Import Data" secenegini secin.
Import dialogunda:
File Type: JSON olarak secin.
Select File: Masaüstunde olusturdugunuz example.json dosyasini secin.
JSON Format: Array of Documents olarak ayarlayin.
Import butonuna tiklayin ve islemin tamamlanmasini bekleyin.

Import Islemini Dogrulama:
flights koleksiyonunda eklediginiz ucus verilerini goruntuleyin.
Her bir ucus belgesinin dogru alanlara sahip oldugundan emin olun.

Uygulamayi Calistirma

Backend Sunucusunu Baslatma

Backend Dizini'ne Gitme:
cd backend

Sunucuyu Baslatma:

npm kullanarak:
npm run dev

yarn kullanarak:
yarn dev

Not: Bu komut nodemon kullanarak sunucuyu dosya degisikliklerinde otomatik olarak yeniden baslatir. nodemon'un dev bagimliligi olarak yüklü oldugundan emin olun.

Sunucunun Calistigini Dogrulama:

Terminalinizde asagidaki loglari kontrol edin:
MongoDB URI: mongodb+srv://kullaniciadi:sifre@cluster0.mongodb.net/flight-reservation?retryWrites=true&w=majority
Connected to MongoDB
Server running on port 5000
Sunucu http://localhost:5000 adresinde calisiyor olmali.

Frontend Sunucusunu Baslatma

Frontend Dizini'ne Gitme:
cd frontend

React Uygulamasini Baslatma:

npm kullanarak:
npm start

yarn kullanarak:
yarn start

Uygulamaya Erisme:

Tarayicinizi açin ve http://localhost:3000 adresine gidin.
Flight Reservation Sistemi arayuzunu, tarih secici ve ucus listeleri ile goruntulemelisiniz.

API Dokumantasyonu

Tarih ile Ucus Getirme

Endpoint: GET /api/flights

Aciklama: Belirli bir tarihteki kalkis yapan uçuslari getirir.

Sorgu Parametreleri:

date (zorunlu): Kalkis tarihi YYYY-MM-DD formatinda.

Istek Ornegi:
GET http://localhost:5000/api/flights?date=2024-09-24

Yanıt Ornegi:
[
    {
        "_id": "614c1b8f8f1b2c3d4e5f6a7b",
        "airline": "Turkish Airlines",
        "flightNumber": "TK123",
        "departureAirport": "IST",
        "arrivalAirport": "JFK",
        "departureTime": "2024-09-24T14:00:00.000Z",
        "arrivalTime": "2024-09-24T18:00:00.000Z",
        "departureDate": "2024-09-24T00:00:00.000Z"
    },
    ...
]
Rezervasyon Olusturma
Endpoint: POST /api/reservations

Aciklama: Belirli bir uçus icin rezervasyon olusturur.

Istek Body:
{
    "flightId": "614c1b8f8f1b2c3d4e5f6a7b",
    "user": {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890"
    }
    // Ek rezervasyon bilgileri
}

Yanıt Ornegi:
{
    "message": "Rezervasyon basarili",
    "reservation": {
        "_id": "614c1c2f8f1b2c3d4e5f6a7c",
        "flightId": "614c1b8f8f1b2c3d4e5f6a7b",
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "1234567890"
        },
        "reservationDate": "2024-09-23T12:34:56.789Z"
    }
}

Sorun Giderme
Ucus verilerini cekme veya goruntuleme konusunda sorun yasiyorsaniz, asagidaki adimlari takip ederek sorunu tespit edip cozulmesini saglayabilirsiniz.

1. Backend Sunucusunun Calistigini Dogrulama
Backend sunucusunun hatasiz calistigindan emin olun.

Terminalinizde asagidaki loglari kontrol edin:
MongoDB URI: mongodb+srv://kullaniciadi:sifre@cluster0.mongodb.net/flight-reservation?retryWrites=true&w=majority

Connected to MongoDB
Server running on port 5000

2. MongoDB Compass'ta Veriyi Dogrulama
MongoDB Compass'i acin ve cluster'a baglanin.
flight-reservation veritabani ve flights koleksiyonunu acin.
Ucus belgelerinin varligini ve dogru formatta oldugunu kontrol edin.

3. API Endpoint'lerini Dogrudan Test Etme
Tarayıcı Kullanarak:
http://localhost:5000/api/flights?date=2024-09-24 adresini tarayicinizda acin ve yaniti kontrol edin.

4. Frontend Loglarini Kontrol Etme
Tarayici geliştirici araclarini (F12) acin ve Console sekmesine gecin.
Flights response data: logunu kontrol edin ve verilerin dogru sekilde alindigini kontrol edin.
Hata mesajlari var ise, detaylarini inceleyin.

5. Network Isteklerini Inceleme
Tarayici geliştirici araclarinda Network sekmesine gecin.
flights?date=2024-09-24 istegini bulun ve yaniti kontrol edin.
Status Code: 200 olmalidir.
Response: Ucus verilerini icermelidir.

6. Ortam Degiskenlerini Kontrol Etme
Hem backend hem de frontend .env dosyalarinin dogru sekilde ayarlandigindan emin olun.

Backend .env:
PORT=5000
MONGODB_URI=mongodb+srv://kullaniciadi:sifre@cluster0.mongodb.net/flight-reservation?retryWrites=true&w=majority

Frontend .env:
REACT_APP_API_URL=http://localhost:5000/api

7. Sunuculari Yeniden Baslatma
Degisikliklerden sonra hem backend hem de frontend sunucularini yeniden baslatin.

# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm start
8. CORS Ayarlarini Kontrol Etme
Backend sunucusunun server.js dosyasinda CORS ayarlarini dogru sekilde yapildigindan emin olun.

const corsOptions = {
    origin: 'http://localhost:3000', // Frontend'inizin URL'si
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

## ACIKLAMA

Proje sürecinde, Schiphol API ile entegrasyon sırasında çeşitli zorluklarla karşılaştık. Başlangıçta, API üzerinden 20 adet uçuş bilgisini başarıyla çekip rezervasyon yapabildik. Ancak, bu uçuşlar zamanla veri tabanımızdan kayboldu ve rezervasyon yapılamayan uçuşlara dönüştü. Bu durum, sistemin güvenilirliğini ve kullanılabilirliğini olumsuz etkiledi.

API'den veri çekme konusunda yaşadığımız başlıca sorunlar şunlardır:

- **Veri Çekilememe:** API'den alınan yanıtlar her ne kadar HTTP 200 OK statüsü dönse de, beklenen uçuş verilerini sağlamıyordu. Bu durum, kullanıcı deneyimini ciddi şekilde olumsuz etkiledi.
  
- **Rezervasyon Sorunları:** İlk etapta çekilen uçuş verileriyle rezervasyon işlemlerini başarılı bir şekilde gerçekleştirebildik. Ancak, sonraki denemelerde bu uçuşlar rezervasyon yapılamayan uçuşlara dönüştü ve kullanıcıların rezervasyon yapmasını engelledi.
  
- **Veri Tutarsızlığı:** Uçuş verilerini yeniden çekmeye çalıştığımızda, sadece rezervasyon yapılamayan uçuşlar listeleniyordu. Daha sonra bu uçuşlar da sistemden kayboldu, bu da veri tutarlılığı konusunda ciddi sorunlar yaşadığımızı gösterdi.
  
- **Fonksiyonel Kısıtlamalar:** Başlangıçta sadece Amsterdam Havalimanı'ndan kalkıp aynı havalimanına inen uçuşları listeleyebiliyorduk. Kalkış yeri ve varış yeri seçme gibi kullanıcı dostu özellikleri uygulamaya dahil edemedik. Ayrıca, kalkış yapan uçakların IATA kodları görünüyordu fakat hangi şehre veya ülkeye gideceği bilgisi eksikti. Aynı şekilde, iniş yapacak uçaklar için de bu bilgiler yetersizdi.
  
- **API Entegrasyon Problemleri:** Schiphol API ile düzgün bir entegrasyon sağlayamadık. API'nin beklenen veri formatında yanıtlar vermemesi ve sürekli değişen uçuş verileri, projenin ilerlemesini engelledi. Bu sebeple, uçuş verilerini güvenilir bir şekilde çekip yönetmekte zorlandık.

Bu sorunlar nedeniyle, projenin temasına özen göstermeyi bir kenara bırakarak, öncelikli olarak sistemin işlevselliğini sağlamaya odaklandık. Ancak, API ile yaşanan entegrasyon problemleri ve veri tutarsızlıkları, projenin tam anlamıyla çalışır hale gelmesini engelledi. Gelecekte, daha stabil ve güvenilir bir uçuş veri sağlayıcısı ile çalışmayı planlıyoruz. Ayrıca, kullanıcı deneyimini iyileştirmek adına kalkış ve varış yerlerinin seçilebildiği, uçuş bilgilerini daha detaylı sunan özelliklerin eklenmesi hedeflenmektedir.

Projenin mevcut durumu, uçuş verilerini güvenilir bir şekilde yönetmek ve kullanıcı dostu özellikler sunmak adına daha fazla geliştirmeye ihtiyaç duyduğunu göstermektedir. Kod ve proje yapısını inceleyenlerin, mevcut altyapının potansiyelini fark etmelerini ve bu sorunların çözümü için atılacak adımlara katkıda bulunmalarını umuyoruz.

Iyi Kodlamalar! 🚀