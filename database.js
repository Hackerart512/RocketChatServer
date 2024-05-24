const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mogooseURI = process.env.MONGO_URL;

mongoose.set('debug', true);

mongoose.connect(mogooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB successfully...');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = db;
