const express = require('express');
const nodemon = require('nodemon');
const app = express();
const path = require('path');
const logger = require('./middleware/logger')
//app.use(logger);

//Set static folder
app.use(express.static(__dirname + '/public'));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));