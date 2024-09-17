// Create web server
// Create a page that displays all comments
// Create a page that displays the comments of a specific user
// Create a page that displays the comments of a specific post

const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments.json');