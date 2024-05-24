const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mogooseURI = process.env.MONGO_URL;

mongoose.set('debug', true);

mongoose.connect(mogooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

var db = mongoose.connection;

db.on('connected', function () {
  console.log('Connected to MongoDB successfully...');
});

module.exports = db;
