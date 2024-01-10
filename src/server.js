const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;


const corsOptions = {
    origin: 'http://localhost:8000', 
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/restaurants', async (req, res) => {
    const { lat, lng } = req.query;

    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=AIzaSyCDDBYrDNKyhI7ruQSEDSOBP4VxO_sywZE`;

    try {
        const apiRes = await axios.get(apiUrl);
        res.json(apiRes.data);
    } catch (error) {
        console.error("Error fetching the Google Maps data:", error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
