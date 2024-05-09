const express = require('express');
const PORT = 4000;
const server = express();
const axios = require('axios');
server.use(express.json());
require("dotenv").config();

const limit = 1;
API = process.env.API_KEY_VALUE

server.get('/jokes/random', async (request, response) => {
    try {
        const result = await axios.get('https://api.api-ninjas.com/v1/jokes?limit=' + limit, {
            headers: {
                
                'X-Api-Key': API
            }
        });
        response.json(result.data);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }

    // response.writeHead(200,{'content-type':'application/json'});
    // response.end(JSON.stringify(result));
});

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});