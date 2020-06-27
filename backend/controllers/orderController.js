const express=require('express');
var router=express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
//var {Category} = require('../models/categoryModel');
var {Order} = require('../models/orderModel');



router.post('/',(req, res) => {
    var insertData = new Order({
        iname: req.body.iname,
        idesc: req.body.idesc,
        cname: req.body.cname,
        cemail: req.body.cemail,
        cphone : req.body.cphone,
        caddress : req.body.caddress,
        quan : req.body.quan,
        price : req.body.price,
        date : req.body.date,

    });
    insertData.save((err, doc) => {
        if(!err) {res.send(doc); console.log(doc);}
        else {console.log('Error saving data : '+JSON.stringify(err));}
    });
});
 
router.get('/',(req, res) => {
    Order.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Product Detail..!'+JSON.stringify(err));}
    });
});



module.exports = router;

