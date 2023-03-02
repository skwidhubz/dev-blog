const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));


// send to a request to routes to go via index js to check where the request needs to go.

// login -> server (/login?) --> go to routes folder.
