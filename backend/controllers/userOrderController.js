const express=require('express');
var router=express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var {Order} = require('../models/orderModel');

router.get('/:cemail', (req, res) => {
    Order.find({cemail:req.params.cemail}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;