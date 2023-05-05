const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/form', (req, res) => {
  const formData = req.body;
  console.log(formData);

  // process form data here

  res.json(formData);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
