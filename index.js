const express = require('express');
const app = express();
const cors = require('cors') ;

const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Chef Recipe Hunter is running')
})

app.get('/chef-data', (req, res) => {
    res.send(chefData);
})


app.listen(port, () => {
    console.log(`Chef Recipe Hunter is running on port: ${port}`)
})