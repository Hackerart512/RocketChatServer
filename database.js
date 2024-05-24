const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const mogooseURI = `${process.env.MONGO_URL}`;

// mongoose.connect(mogooseURI, {});

var db = mongoose.connection;

// db.on('connected', function(){
//     console.log('Connect to mongoose successfully...');
// })

// const uri = 'mongodb+srv://hacker:hacker@cluster0.ltt9gpg.mongodb.net/RocketChat?retryWrites=true&w=majority';
// const uri = 'mongodb+srv://hacker:hacker@cluster0.ltt9gpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mogooseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
})
   
db.on('connected', function () {
    console.log('Connect to mongoose successfully...');
})

module.exports = db;