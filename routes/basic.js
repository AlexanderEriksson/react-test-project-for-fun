const routes = require('express').Router()

//Begin of routes
routes.get('/', (req, res) =>{
    res.send("Hello world")
});



module.exports = routes;
