import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';
import { AppleService, AppleResponse } from '../apple.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  appleIcon = L.icon({
    // iconUrl: '../assets/apple-alt-solid.svg',
    iconUrl: '../assets/icons8-apple-48.png',

    iconSize: [25,25]
  });

  AppleMarker = L.Marker.extend({

    options: {
        icon: this.appleIcon
    },

    apple: {},

    setApple: function(apple: Apple) {
        this.apple = apple;
    },

    getApple: function(): Apple{
        return this.apple;
    }

  });

  private map: L.map;
  apples: AppleResponse;
  markers: L.marker[];
  clusters: L.markerClusterGroup;
  
  
  appleObserver = {
    next: x => this.UpdateApples(x),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  constructor(public infoPanelService: InfoPanelService, public appleService: AppleService) { 
    var treeIcon = L.icon({
      iconUrl: '../assets/icons8-color-48.png',

      iconSize: [40,40]
    });

    L.DomUtil.TRANSITION = true;

    this.clusters = new L.markerClusterGroup({
      maxClusterRadius: 20,
      // zoomToBoundsOnClick: false,
      spiderfyOnMaxZoom: false,
      disableClusteringAtZoom: 17,

      iconCreateFunction: function(cluster) {
        return treeIcon;
      }
    });

    this.apples = {body: []};
    this.markers = [];
  }

  UpdateApples(x){
    this.apples = x;
    this.clusters.removeLayers(this.markers)
    console.log('after remove', this.clusters);
    this.markers = []

    console.log("observer : ", this.apples);
    this.apples.body.forEach(function(a) {
      // console.log("forEach : ", a);
      var am = new this.AppleMarker([a["treeLatitude"], a["treeLongitude"]], {});
      if(a.treeLatitude != null && a.treeLongitude != null) {
        am.setApple(a);
        am.on('click', function() {
          // console.log(am.getApple().id);
          this.infoPanelService.add(am.getApple());
          this.infoPanelService.showPanel();
          // console.log(this.map.getZoom());
          var zoom = this.map.getZoom();
          if(zoom < this.map.getMaxZoom()) {
            zoom += 1;
          }
          this.map.panTo([am.getApple().treeLatitude, am.getApple().treeLongitude], zoom);
        }, this);
        this.markers.push(am);
      }
    }, this);

    if(this.markers.length != 0) {
      this.clusters.addLayers(this.markers);
      // L.featureGroup(clusterMarkers).addTo(this.map); 
      this.map.addLayer(this.clusters);
    } else {
      console.log('no markers')
    }
  }
  
  getMap() {
    return this.map;
  }

  getRandomAdjustment(): number {
    return Math.random() * (0.001 - 0.0005) + 0.0005;
  }
  
  private initMap(): void {
    // Setting location to Boulder
    this.markers = [];
    var p1 = L.latLng(40.149152, -105.378020),
    p2 = L.latLng(39.957245, -105.170137),
    bounds = L.latLngBounds(p1, p2);

    // Historic map layer
    var mapurl = '../assets/Copy of 1937 Aerial Photo_Earth Sciences.png',
        imageBounds = [[40.052709, -105.309205], [39.973121, -105.245030]];

    var historic_map = L.imageOverlay(mapurl, imageBounds, { opacity: 0.7 });

    // Different world tile layers
    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });

    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    this.map = L.map('map', {
      // maxBounds: bounds
      layers: [Esri_WorldTopoMap]
    }).setView([40.0150, -105.2705], 12.5);

    var baseLayers = {
      "Topological": Esri_WorldTopoMap,
      "Greyscale": Stadia_AlidadeSmoothDark,
      "Terrain": Esri_WorldImagery
    }

    var overlayMaps = {
      "1920s Historic Map of Boulder": historic_map 
    };

    L.control.layers(baseLayers, overlayMaps).addTo(this.map);

  }

  ngOnInit() {
    this.initMap();

    this.appleService.getApples();
    this.appleService.applesSource.subscribe(this.appleObserver);
  }


}