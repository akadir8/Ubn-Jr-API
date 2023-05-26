
import express from 'express';
import cors from 'cors'
import db from './mongoRepository.mjs';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/form', (req, res) => {
  const textData = req.body;
  console.log(textData);

  // process form data here

  res.json(textData);
});

app.post("/api/mongo", async (req, res) => {

  let collection = await db.collection("text");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
