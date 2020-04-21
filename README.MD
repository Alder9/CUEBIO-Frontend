# CUEBIO Mapping Project

## Description

This repository contains the Angular frontend application and Node js REST server.

TODO - services/components/map info

### Requirements

This project requires Node js, the Angular framework, and docker. 

TODO - installation instructions, links?

### Project Structure

TODO - more info

The project has the following structure:

* \\backend 
    * Dockerfile
* \\frontend
    * Dockerfile
* docker-compose.yml

### Starting Dev Workspace

For development, it is not recommended to use Docker for this project. Docker is used as a production deployment environment as we did not implement docker dev files.

#### Start node server (from project root directory)
```
cd backend
npm install
npm install aws-sdk (may need to do for each package marked as unresolved dependencies)
npm start
```

#### Start Angular dev app (from project root directory)
```
cd frontend
npm install
ng serve
```

### Building and Deploying

TODO - docker instructions