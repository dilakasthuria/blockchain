const express = require('express');
const router = express.Router();
const web3 = require('../config/web3');

router.post('/addProduct', async (req, res) => {
    const { name, manufacturer } = req.body;
    const supplyChain = new web3.eth.Contract(SupplyChain.abi, SupplyChain.networks[5777].address);
    const accounts = await web3.eth.getAccounts();

    await supplyChain.methods.addProduct(name, manufacturer).send({ from: accounts[0] });
    res.send({ message: 'Product added successfully' });
});

module.exports = router;
