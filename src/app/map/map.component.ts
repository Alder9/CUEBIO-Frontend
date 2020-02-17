import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';
import * as L from 'leaflet';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';
import { AppleService } from '../apple.service';

import { appleMarker } from '../apple-marker';

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
  apples: Apple[];
  markers: L.marker[];

  constructor(public infoPanelService: InfoPanelService, public appleService: AppleService) { 
      this.getApples();
  }

  getRandomAdjustment(): number {
    return Math.random() * (0.001 - 0.0005) + 0.0005;
  }

  getApples(): void {
    this.appleService.getApples()
        .subscribe(apples => { this.apples = apples;
          console.log(apples)
        },
        (error) => {
          console.log(error);
        });
  }
  
  private initMap(): void {
    // Setting location to Boulder
    this.markers = [];
    var p1 = L.latLng(40.149152, -105.378020),
    p2 = L.latLng(39.957245, -105.170137),
    bounds = L.latLngBounds(p1, p2);
    this.map = L.map('map', {
      // maxBounds: bounds
    }).setView([40.0150, -105.2705], 12.5);

    // World Tile Layer
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)

    // Apple Markers
    this.getApples();

    this.apples.forEach(function (a) {
      console.log(a.id);
      var am = new this.AppleMarker([a["treeLatitude"], a["treeLongitude"]], {});
      // Check to see if the lat/long are valid
      if(a.treeLatitude != -1 && a.treeLongitude != -1) {
        if(a.propertyOwner == "private") {
          // Adjust the lat/long a little
          console.log("old tree lat long: " + a.treeLatitude + "," + a.treeLongitude);
          a.treeLatitude += this.getRandomAdjustment();
          a.treeLongitude += this.getRandomAdjustment();
          console.log("new tree lat long: " + a.treeLatitude + "," + a.treeLongitude);

        }

        am.setApple(a);
        am.on('click', function() {
          // console.log(am.getApple().id);
          this.infoPanelService.add(am.getApple());
          this.infoPanelService.showPanel();
          this.map.flyTo([am.getApple().treeLatitude, am.getApple().treeLongitude], 16);
        }, this);
        this.markers.push(am);
      }
    }, this);

    L.featureGroup(this.markers)
      .addTo(this.map);

  }

  ngOnInit() {
    this.initMap();
  }

}
