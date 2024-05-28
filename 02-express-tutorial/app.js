const express = require('express');
const app = express();

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const people = require('./routes/people');
app.use('/api/people', people);

const auth = require('./routes/auth');
app.use('/login', auth);

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
});
