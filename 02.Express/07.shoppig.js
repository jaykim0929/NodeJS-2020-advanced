const express = require('express');

const shoppingRouter = require('shoppingRouter');

shoppingRouter.get('/', function(req, res) {
    res.send('<h1>Shopping Router</h1>');
});
shoppingRouter.get('/index', function(req, res) {
    res.send('<h1>Shopping Router index</h1>');
});