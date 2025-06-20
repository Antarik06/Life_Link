const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bloodRequestRoutes = require('./routes/bloodRequestRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

const bloodCampRoutes = require('./routes/bloodCampRoutes');
app.use('/api/blood-camps', bloodCampRoutes);
// Test route
app.get('/', (req, res) => {
  res.send('LifeLink backend is running 🚑');
});

const PORT = process.env.PORT || 5000;
app.use('/api/blood-requests', bloodRequestRoutes);
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});


