# CUEBIO Mapping Project Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Description

### Components

Components can be found under the folder labeled based on their name. The app is made up of the following components: 

#### Map

The Map Component holds the contains the Leaflet map. This component renders the apples by creating custom Leaflet markers `AppleMarkers` which on click opens the info-panel component. In addition, Leaflet.markercluster is used to cluster the markers into tree icons. This uses Leaflet functions to contain the 1937 historic map layer and different map tiles: Topological, Terrain, Dark, and Greyscale. The apples displayed are the current state of the apples stored in the apple service, more information can be found in that section.

#### Info-Panel

The info-panel appears/changes when an apple is clicked. This exhibits any s3 images connected with the apple and selected data. The data exhibited is dependent on the info-panel service.

#### Filter

The filter appears above the map. It has several filters which when selected generate different inputs. The filters that require an number input generate an input box otherwise a dropdown menu is created. When the filter button is pressed 

### Services

In order to deliver data to the components the apple and info-panel services are employed. Services can be found in the `/services/` folder.

#### Apple Service

This service uses Subscribers/Observers for using the `apples` variable as the source of truth. `apples` gets updated everytime a http request is invoked such as when the filter or clear button is clicked and when the map first loads. The `appleSource` variable is a RxJS `BehaviorSubject` which is like an Observable which can be subscribed to. In the constructors of the filter and map component, an `appleObserver` is added as a subscriber to the `appleSource` which allows it to update the map whenever a new http request updates the `apples` in the service. 

#### Info-Panel service

The info-panel behaves in a similar sort of way with the s3 images. Instead an array of urls is stored in the private `images` var and `imageSource` is the `BehaviorSubject`. The info-panel component subscribes to this with its `imageObserver`. The apple data appears since the currently clicked apple. When the apples are generated on click they are added to the info-panel service which the info-panel component reads from to get the stored data. 

## Install node-modules

Run `npm install` to install the requires node-modules.

You may also need to install Leaflet.markercluster by `npm install Leaflet.markercluster`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If not in a angular-cli project, run `npm serve`.  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
