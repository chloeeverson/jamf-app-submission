const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get groups
router.get('/', (req, res) => {

  let queryText = `SELECT * FROM "group";`;
  pool.query(queryText).then(result => {
    // Sends back the results in an array
    res.send(result.rows);
  })
    .catch(error => {
      console.log('error getting groups', error);
      res.sendStatus(500);
    });
});

module.exports = router;