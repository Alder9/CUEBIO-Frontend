const express = require('express');
const request = require('request');
const aws = require('aws-sdk');
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

app.get('/images/:appleid/', (req, res) => {
  console.log('tree_' + req.params.appleid + '/');

  image_paths = []

  getParams['Prefix'] = 'tree_' + req.params.appleid + '/';

  s3.listObjects(getParams, function(err, data) {
    if(err) {
      console.log("Error", err);
    } else {
      console.log("Success", data['Contents']);

      data.Contents.forEach(function(obj, index){
        image_paths.push(obj.Key)
      });

      console.log(image_paths);
    }
  })

  res.json({});
});

app.get('/filter/:filterName/value/:value', (req, res) => {
  console.log(req.params.filterName);
  console.log(req.params.value);
});

app.get('/beta/query1', (req, res) => {
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