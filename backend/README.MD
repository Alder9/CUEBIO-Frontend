# CUEBIO Mapping Project Node Server

## Description

This Node server handles are the interactions between the AWS Lambda API endpoint which gets data from the AWS RDS instance as well as the communication with the AWS S3 Bucket via the aws-sdk. A config.json is necessary for the AWS keys. The endpoints are hit by the Angular app when new apples or images are needed.

## Running
```
npm install
npm install express
npm install -g nodemon
npm start
```