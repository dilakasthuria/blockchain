const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const supplyChainRoutes = require('./routes/supplyChainRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/supplyChain', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/supplyChain', supplyChainRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
