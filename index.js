const express = require('express');
const app = express();
const betriebRouter = require('./routes/betriebRouter');

app.listen(3000, function (req, res) {
  console.log('Server is running on port 3000');
});

//Mount the router to the base route
app.use('/api/v1', betriebRouter);

// Handle all URLs that are not handled before
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'Not found',
  });
});
