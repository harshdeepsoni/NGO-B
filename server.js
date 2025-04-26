// server.js
const express = require('express');
const mongoose = require('mongoose');
const ngoRoutes = require('./routes/ngoRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://harshdeep9596:A3gsSdU33si1rC3l@cluster0.le0fjuu.mongodb.net/ngoDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Direct route (just for test)
app.get('/api/ngo/all', (req, res) => {
  res.send('Direct All NGOs route ✅');
});

// Load routes
app.use('/api/ngo', ngoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
