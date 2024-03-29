const express = require("express");
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: false}
  });

  const User = mongoose.model('users', UserSchema);
     module.exports = User;