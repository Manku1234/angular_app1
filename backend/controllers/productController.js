const express=require('express');
var router=express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
//var {Category} = require('../models/categoryModel');
var {Product} = require('../models/productModel');
var {Category}=require('../models/categoryModel');
var {Brand}=require('../models/brandModel');


router.post('/',(req, res) => {
    var insertData = new Product({
        iname: req.body.iname,
        idesc: req.body.idesc,
        iprice: req.body.iprice,
        ipic: req.body.ipic,
        category_id: req.body.category_id,
        brand_id: req.body.brand_id,
    });
    insertData.save((err, doc) => {
        if(!err) {res.send(doc); console.log(doc);}
        else {console.log('Error saving data : '+JSON.stringify(err));}
    });
});
//select all the products
//http://localhost:3000/products
router.get('/',(req, res) => {
    Product.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Product Detail..!'+JSON.stringify(err));}
    });
});
//select a specific product by id
//http://localhost:3000/products
router.get('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record given with id : ${req.params.id}`);

        Product.findById(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('Error Retriving Product Data : ' + JSON.stringify(err));
    });
});
//update the database
router.put('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id : ${req.params.id}');
    var updateData={
        iname: req.body.iname,
        idesc: req.body.idesc,
        iprice: req.body.iprice,
        ipic: req.body.ipic,
        category_id: req.body.category_id,
        brand_id: req.body.brand_id,

    };
    Product.findByIdAndUpdate(req.params.id, {$set: updateData}, {new: true}, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('Error in Updating Update : '+JSON.stringify(err, undefined, 2));
    });
});
//delete from database
router.delete('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No records with given id : ${req.params.id}');
        Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('No record with the given Id : '+JSON.stringify(err, undefined, 2));
    });
});


module.exports = router;

