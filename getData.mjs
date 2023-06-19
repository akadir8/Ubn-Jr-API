import express from 'express';
import db from './mongoRepository.mjs';

const router = express.Router();

router.get('/api/mongo/abdulkadir', async (req, res) => {
  try {
    let collection = await db.collection('texts');
    let data = await collection.find().toArray(); // Fetch all documents and convert them to an array
    res.json(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
