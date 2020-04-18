const express = require('express');
const request = require('request');

//Load the query String module
// var querystring = require('querystring');


const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/:filter/:value', (req, res) => {
  const filterString = req.params.filter;
  const valueString = req.params.value;
  request(
    { url: 
      'https://vndmcwy7p1.execute-api.us-east-2.amazonaws.com/beta/query1?' + filterString + '=' + valueString},

    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      
        res.json(JSON.parse(body));
    }
  )
});

app.get('/apples', (req, res) => {
  request(
    { url: 'https://kl4auc0304.execute-api.us-east-2.amazonaws.com/beta/query1'},

    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      
        res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));