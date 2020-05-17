[![Build Status](https://travis-ci.com/Alder9/CUEBIO-Frontend.svg?branch=master)](https://travis-ci.com/Alder9/CUEBIO-Frontend)

# CUEBIO Mapping Project

## Description

This repository contains the Angular frontend application and Node js REST server.

More information for each program can be found at:

* [Frontend](https://github.com/Alder9/CUEBIO-Frontend/tree/master/frontend)
* [Backend](https://github.com/Alder9/CUEBIO-Frontend/tree/master/backend)

### Requirements

This project requires Node js, the Angular framework, and docker.io/docker-compose. 

Installation for these can be found on there websites:

* [Angular](https://angular.io/)
* [NodeJS](https://nodejs.org/en/)
* [Docker](https://www.docker.com/)

### Project Structure

The project has the following structure:
```
\backend 
    - Dockerfile
    - .travis.yml
    - .gitignore
    - ...
\frontend
    - Dockerfile
    - .travis.yml
    - .gitignore
    - ...
docker-compose.yml
.travis.yml
.gitignore
```

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

Note when using Docker the Angular project builds which could take a little.
In order to deploy run the following commands on an Ubuntu machine with `docker.io` and `docker-compose` installed with `apt-get install`.

In the directory the GitHub project is cloned into:
```
sudo docker-compose build --no-cache
sudo docker-compose up -d 
```

Note the `-d` in the second line stands for "detached". For non-detached mode where output can be seen omit this.

