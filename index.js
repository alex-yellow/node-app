const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contacts', function(req, res){
    res.status(200).sendFile(path.join(__dirname, 'views', 'contacts.html'));
});

app.use(function(req, res){
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000, function(){
    console.log('Server is running on port', PORT);
});