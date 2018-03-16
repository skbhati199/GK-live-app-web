var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = require('../models/Question.js');


// GET ALL Questions
router.get('/', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    Question.find(function(err, products){
        if(err) return next(err);
        res.json(products);
    });
});

// GET Single Question by ID
router.get('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    Question.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  

  
/* SAVE Question */
router.post('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    Question.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE Question */
  router.put('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    Question.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Question */
  router.delete('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    Question.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;