const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();

app.use(express.json())
app.use(cors());
const bookroute = require('./routes/bookRoutes')();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hii from the home side');
})

app.use('/book', bookroute)

app.listen(3000, () => {
    console.log('Server listen to port 3000');
})