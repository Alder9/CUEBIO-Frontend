const express = require('express');
const request = require('request');
const aws = require('aws-sdk');
var cache = require('memory-cache');

var config = require('./config');
var s3  = new aws.S3({accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region});


var getParams = {
  Bucket: 'appletreebucket',
  // Key: 'tree_100/'
}

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  next();
});

app.get('/api/images/:appleid/', (req, res) => {
  console.log('tree_' + req.params.appleid + '/');

  image_paths = []

  getParams.Prefix = 'tree_' + req.params.appleid + '/';

  const cache_contents = cache.get(req.params.appleid);
  if (cache_contents == null) {
    s3.listObjects(getParams, function(err, data) {
      if(err) {
        console.log("Error", err);
      } else {
        // console.log("Success", data['Contents']);
        data.Contents.forEach(function(obj, index){
          const url = s3.getSignedUrl('getObject', {
            Bucket: 'appletreebucket',
            Key: obj.Key,
            Expires: 1800
          })
  
          image_paths.push(url)
        });
  
        cache.put(req.params.appleid, image_paths, 1800000);
        console.log('from aws', image_paths);
        res.json(image_paths);
      }
    });
  }
  else {
    console.log('grabbing from cache', cache_contents);
    res.json(cache_contents);
  }

  
});

app.get('/api/:filter/:value', (req, res) => {
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

app.get('/api/apples', (req, res) => {
  request(
    { url: 'https://vndmcwy7p1.execute-api.us-east-2.amazonaws.com/beta/query1'},

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
