const express = require('express');
const app = express();
const PORT = process.env.PORT || 3454;
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://jonathan-troy:black-pink@sessionsdeargodcluster0.iiymajh.mongodb.net/sessions-dear-god?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Initial DB connection successful..'))
    .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>');
});

app.listen(PORT, () => {
    console.log(`Application listening on ${PORT}`);
});