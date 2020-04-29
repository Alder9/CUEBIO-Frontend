import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Apple } from '../apple';

export interface AppleResponse {
  body: Apple[];
}

@Injectable({
  providedIn: 'root'
})
export class AppleService {

  BASE_URL = 'http://ec2-18-188-46-232.us-east-2.compute.amazonaws.com:3000/';


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

