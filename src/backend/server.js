import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/api', async (req, res) => {
    try {
        const { text } = req.query;
        console.log(text);
        const url = 'https://api.simsimi.vn/v2/simtalk';
        const body = new URLSearchParams({
            version: 'v2',
            lc: 'en',
            text: text
        });
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body,
        });
        const json = await response.json();
        res.json(json);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch from API' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});