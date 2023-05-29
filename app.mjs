import express from 'express';
{/*'express' adlı bir Node.js framework'ünü içe aktarıyoruz. Bu framework, web uygulamaları oluşturmak için kullanılır.*/}
import cors from 'cors'
{/* 'cors' adlı bir kütüphaneyi içe aktarıyoruz. CORS (Cross-Origin Resource Sharing), web tarayıcısı güvenlik politikaları nedeniyle farklı kaynaklardan gelen isteklere izin vermek için kullanılan bir mekanizmadır.*/}
{/*'./mongoRepository.mjs' dosyasından 'db' adlı bir modülü içe aktarıyoruz. Bu modül, MongoDB veritabanına erişmek ve işlemler yapmak için kullanılır.*/}
const app = express();
/*'express' modülünü kullanarak yeni bir Express uygulaması oluşturuyoruz ve 'app' adlı bir değişkene atıyoruz. Bu değişken, web sunucusunu temsil eder.*/
app.use(express.json());
{/*Express uygulamasında gelen isteklerdeki JSON verilerini kolayca okuyabilmek ve işleyebilmek için kullanılan bir ara yazılımdır.*/}
app.use(cors());
{/*Express uygulamasında Cross-Origin Resource Sharing (CORS) politikalarını etkinleştirmek için kullanılan bir ara yazılımdır */}

export default app;