// Create web server
// 1. Import the express library
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route that listens for GET requests at the path /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route.');
});
// 4. Start the server on port 4001
app.listen(4001, () => {
  console.log('Your server is running on port 4001.');
});