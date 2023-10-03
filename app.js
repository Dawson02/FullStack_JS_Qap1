//Task 2 app.js

const express = require('express');
const app = express();
const port = 3000; 

//Define a route that responds with a message
app.get('/', (req, res) => {
    res.send('This is expreses.js example');
});

//Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});