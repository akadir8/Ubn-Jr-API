import app from './app.mjs';
import db from './mongoRepository.mjs';

app.post('/api/form', (req, res) => {
  const textData = req.body;
  console.log(textData);
  res.json(textData);
});

app.post("/api/mongo/abdulkadir", async (req, res) => {
  try {
    let collection = await db.collection("texts");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default app;
