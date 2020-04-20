import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Apple } from '../apple';
import * as L from 'leaflet';

export interface AppleResponse {
  body: Apple[];
}

@Injectable({
  providedIn: 'root'
})
export class AppleService {

  BASE_URL = 'http://localhost:3000/';

  markers: L.marker[];
  clusters: L.markercluster;


  private apples: AppleResponse;
  applesSource = new BehaviorSubject<AppleResponse>({body: []});


  // sharedApples = this.apples.asObservable();
    
  constructor(private http: HttpClient) {
  }

  getApples() {
    this.http.get<AppleResponse>(this.BASE_URL + 'apples')
    .subscribe(data => {
      this.apples = data;
      console.log('get apples service ', this.apples);
      this.applesSource.next(this.apples);
    })
  }


  getFilteredApples(selectedFilter: String, value: String) {
    console.log(this.BASE_URL + selectedFilter + '/' + value)
    this.http.get<AppleResponse>(this.BASE_URL + selectedFilter + '/' + value)
    .subscribe(data => {
      this.apples = data;
      console.log('get filter apples service ', this.apples);
      this.applesSource.next(this.apples);
   
    })
  }
}

