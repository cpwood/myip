const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
// Create an HTTP server and listen for requests on port 3000

app.set('trust proxy', true);

app.get('/', (req, res) => {
  console.log(`New request from ${req.ip}`);
  res.send(req.ip)
});


app.listen(port, () => {
  console.log(`Now listening on port ${port}.`);
});

