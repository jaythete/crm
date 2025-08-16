require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const statsRoutes = require('./routes/statsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Quorium CRM API is running' });
});

app.use('/api/contacts', contactRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/stats', statsRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quorium_crm';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
