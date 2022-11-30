const express = require('express');
const app = express();
const PORT = process.env.PORT || 3454;

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>');
});

app.listen(PORT, () => {
    console.log(`Application listening on ${PORT}`);
});