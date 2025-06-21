const express = require("express");
const mongoose = require("mongoose");
const AuthRouter = require("./routers/Auth")

const PORT = process.env.PORT || 3000;
const app = express();



const DB = "mongodb+srv://subhamnabik2005:subham2005@cluster0.h9kq35e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

const DB2 = "mongodb+srv://antariktarafder06:DPTB59rjonaMFyHE@cluster0.zmtq8gk.mongodb.net/lifelinkDB?retryWrites=true&w=majority&appName=Cluster0"


// Main connection
mongoose.connect(DB)
  .then(() => console.log("Connection Successful"))
  .catch((e) => console.log(e));

// Second connection for lifelinkDB
const lifelinkConnection = mongoose.createConnection(DB2);
lifelinkConnection.on('connected', () => {
  console.log("Connection Successful with lifelinkDB");
});
lifelinkConnection.on('error', (e) => {
  console.log(e);
});

app.use(express.json());
app.use(AuthRouter);

// --- BloodRequest Model and Route ---
const BloodRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  bloodType: { type: String, required: true },
  units: { type: Number, required: true },
  hospital: { type: String, required: true },
  urgency: { type: String, enum: ['normal', 'urgent', 'critical'], required: true },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now }
});
const BloodRequest = lifelinkConnection.model('BloodRequest', BloodRequestSchema);

app.post('/api/request-blood', async (req, res) => {
  try {
    const { name, phone, bloodType, units, hospital, urgency, additionalInfo } = req.body;
    const request = new BloodRequest({
      name,
      phone,
      bloodType,
      units,
      hospital,
      urgency,
      additionalInfo
    });
    await request.save();
    res.status(201).json({ message: 'Blood request submitted successfully!' });
  } catch (e) {
    res.status(500).json({ error: 'Failed to submit blood request', details: e.message });
  }
});

app.get('/api/request-blood', async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch requests', details: e.message });
  }
});

app.listen(PORT , "0.0.0.0" , () => {
    console.log("Connected at port " + PORT);
}); 

//Node js connection