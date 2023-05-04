const express = require('express');
const app = express();
const cors = require('cors') ;

const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Chef Recipe Hunter is running')
})

app.get('/chefData', (req, res) => {
    res.send(chefData);
})

app.get('/chefData/:id', (req, res)=> {
    const id = req.params.id;
    console.log(id)
    const selectedChefData = chefData.find(c=> c.id === parseInt(id))
    res.send(selectedChefData)
})


app.listen(port, () => {
    console.log(`Chef Recipe Hunter is running on port: ${port}`)
})