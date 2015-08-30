'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SeekerSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Seeker', SeekerSchema);