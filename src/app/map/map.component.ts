import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Apple } from '../apple';

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

  ngOnInit() {
    this.initMap();
  }

}
