const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());  // Enable CORS for all routes
app.use(express.json());       // ✅ Enable JSON parsing for incoming POST data


// Example variable to send to Voiceflow
let userData = {
  persona: ""
};

app.post('/save-persona', async (req, res) => {
    const { persona } = req.body;   // ✅ Extract 'persona' from request body

  if (persona) {
    userData.persona = persona;   // ✅ Update userData with new value
    console.log(`Persona updated to: ${persona}`);
    res.json({ status: 'success', selection: persona });
  } else {
    res.status(400).json({ status: 'error', message: 'Persona is missing in the request body' });
  }
});

// Endpoint for Voiceflow to fetch data
app.get('/api/user-data', (req, res) => {
    console.log(`Persona updated to: ${userData.persona}`);
    res.json(userData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});