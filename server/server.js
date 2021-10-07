const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();


// Route includes
const groupRouter = require('./routes/group.router.js');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Routes */
app.use('/api/group', groupRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
