import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  private map: L.map;

  constructor() { }

  private initMap(): void {
    // Setting location to Boulder
    var p1 = L.latLng(40.149152, -105.378020),
    p2 = L.latLng(39.957245, -105.170137),
    bounds = L.latLngBounds(p1, p2);
    this.map = L.map('map', {
      maxBounds: bounds
    }).setView([40.0150, -105.2705], 12.5);

    var appleIcon = L.icon({
      iconUrl: '../assets/apple-alt-solid.svg',

      iconSize: [20,20]
    });

    // World Tile Layer
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)

    // Apple Markers
    L.marker([40.006861, -105.262801],{icon: appleIcon})
      .bindPopup("<b>Apple</b>")
      .addTo(this.map);

    L.marker([40.009855, -105.26521],{icon: appleIcon})
      .bindPopup("<b>Apple</b>")
      .addTo(this.map);

  }

  // private addInfoPanel(): void {
  //   var info = L.control();

  //   info.onAdd = function (map) {
  //     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  //     // this._div.onmousedown = function(evt) {evt.stopPropagation();}
  //     this._containerTitleBar = L.DomUtil.create('div', 'titlebar', this._div);
  //     this._closeButton = L.DomUtil.create('a', 'close', this._containerTitleBar);

  //     var stop = L.DomEvent.stopPropagation;
  //     L.DomEvent
  //         .on(this._div, 'contextmenu', stop)
  //         .on(this._div, 'click', stop)
  //         .on(this._div, 'mousedown', stop)
  //         .on(this._div, 'touchstart', stop)
  //         .on(this._div, 'dblclick', stop)
  //         .on(this._div, 'mousewheel', stop)
  //         .on(this._div, 'MozMousePixelScroll', stop)

  //     var close = this._closeButton;
  //     L.DomEvent.on(close, 'click', this.hide, stop);

  //     this.update();
  //     return this._div;
  //   };

  //   info.hide = function(e) {
  //     L.DomUtil.removeClass(this._wrapper, 'visible');
  //     this.fire('hide');
  //     return this;
  //   }
  
  //   // method that we will use to update the control based on feature properties passed
  //   info.update = function (props) {
  //       this._div.innerHTML = '<h4>Apple Information Here</h4>' + 'Apple info.';  
  //   };
  
  //   info.addTo(this.map);
  // }

  ngOnInit() {
    this.initMap();
    // this.addInfoPanel();
  }

}
