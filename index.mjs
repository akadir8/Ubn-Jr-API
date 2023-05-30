import app from './app.mjs'
import './textEndPoint.mjs'
import db from './mongoRepository.mjs';
import './getData.mjs'

app.post('/api/form', (req, res) => {
  {/*Bu satırda, Express uygulamasında POST metoduna gelen /api/form yolunda bir isteği ele almak için bir route tanımlanıyor.
  POST metodunda /api/form yoluna gelen istekler, bu route ile eşleşir ve aşağıdaki kod bloğu çalışır. */}
  const formData = req.body;
  {/*Bu satırda, gelen isteğin gövdesindeki verileri alarak formData adlı bir değişkene atıyoruz.
  req.body, Express aracılığıyla gelen isteğin gövdesindeki verilere erişim sağlayan bir nesnedir. Bu nesne, express.json() veya benzeri bir ara yazılımın kullanılması gerektiğini unutmayın. */}
  console.log(formData);
  {/*Bu satırda, formData değişkenini konsola yazdırıyoruz.
  Bu, gelen form verilerinin konsol üzerinde kontrol etmek veya hata ayıklamak için kullanılan bir adımdır. */}
  // process form data here

  res.json(formData);
  {/*Bu satırda, formData değişkenini JSON formatında yanıt olarak gönderiyoruz.
  res.json() yöntemi, JSON formatında bir yanıt oluşturur ve istemciye gönderir.
  Bu durumda, formData JSON formatında yanıt olarak gönderilir ve istemciye geri döndürülür. */}
});

app.post("/api/mongo", async (req, res) => {
  {/*Express uygulamasında POST metoduna gelen /api/mongo yolunda bir isteği ele almak için bir route tanımlanıyor. */}
  let collection = await db.collection("posts");
  {/*Bu satırda, MongoDB veritabanında posts adlı bir koleksiyonu collection değişkenine atıyoruz.*/}
  let newDocument = req.body;
  {/*Bu satırda, gelen isteğin gövdesindeki verileri newDocument değişkenine atıyoruz.
  req.body, Express aracılığıyla gelen isteğin gövdesindeki verilere erişim sağlayan bir nesnedir.*/}
  newDocument.date = new Date();
  {/*Bu satırda, newDocument değişkenine date alanını ekliyoruz ve şu anki tarihi (new Date()) atıyoruz.
  Bu adım, yeni belgenin oluşturulduğu tarihi belgeye eklemek için kullanılır.*/}
  let result = await collection.insertOne(newDocument);
  {/*Bu satırda, collection değişkeni üzerinden newDocument'i MongoDB koleksiyonuna eklemek için insertOne() işlemini kullanıyoruz.
  insertOne() metodu, belirtilen koleksiyona belge ekler ve işlemin sonucunu döndürür.*/}
  res.send(result).status(204);
  {/*Bu satırda, result değişkenini yanıt olarak gönderiyoruz ve yanıt durumunu 204 No Content olarak ayarlıyoruz.
  res.send() metodu, istemciye belirtilen veriyi yanıt olarak gönderir.
  status(204) yöntemi, yanıt durumunu 204 No Content olarak ayarlar, yani başarılı bir istek olduğunu ve içerik olmadığını ifade eder.*/}
});
  {/*Bu kod parçası, /api/mongo yoluna gelen POST isteğini ele alır, gelen verileri MongoDB koleksiyonuna ekler ve başarılı bir yanıt döndürür. Bu işlemler MongoDB bağlantısını gerektirdiği için await kullanılarak asenkron olarak gerçekleştirilir.*/}


app.listen(5000, () => {
  {/*Bu satırda, Express uygulamasının belirtilen portta dinlemesini sağlamak için listen() yöntemi kullanılıyor.
  5000, uygulamanın dinlemesi gereken port numarasını temsil eder. Bu örnekte 5000 olarak belirtilmiştir, ancak farklı bir port numarası da kullanılabilir.*/}
  console.log('Server listening on port 5000');
  {/*Bu satırda, konsola "Server listening on port 5000" mesajı yazdırılır.
  Bu, sunucunun belirtilen portta dinlemeye başladığını ve istemcilere hizmet vermeye hazır olduğunu bildiren bir mesajdır.
  Bu mesaj, sunucunun başarıyla başlatıldığını ve belirtilen portta istekleri dinlemeye başladığını gösterir.*/}
});

{/*Bu kod parçası, Express uygulamasını belirtilen portta dinlemek ve sunucunun başarılı bir şekilde başlatıldığını konsola yazdırmak için kullanılır. Sunucu, belirtilen port numarasında gelen istekleri dinlemeye ve işlemeye hazır hale gelir.*/}
