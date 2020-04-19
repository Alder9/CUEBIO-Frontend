import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Apple } from './apple';
// import { Subject } from 'rxjs/Rx';

export interface AppleResponse {
  body: Apple[];
}

@Injectable({
  providedIn: 'root'
})
export class AppleService {

  BASE_URL = 'http://localhost:3000';


  private apples: AppleResponse;
  applesSource = new BehaviorSubject<AppleResponse>({body: []});

  // private messageSubjet = new Subject();
  
  // private thomasURL = "https://vndmcwy7p1.execute-api.us-east-2.amazonaws.com/beta/query1";
  // private localhost3000query = 'http://localhost:3000/beta/query1';

  // public httpGETFiltered;

  // sharedApples = this.apples.asObservable();
    
  constructor(private http: HttpClient) {
  }

  getApples() {
    this.http.get<AppleResponse>(this.BASE_URL + '/apples')
    .subscribe(data => {
      this.apples = data;
      console.log('get apples service ', this.apples);
      this.applesSource.next(this.apples);
    })
  }
  


  // getApples(): Observable<any> {

  //  return this.http.get(this.BASE_URL + '/apples'); // NEEDS TO BE CHANGES TO EC2 DOMAIN ON DEPLOYMENT
  // }

  // getFilteredApples(selectedFilter: String, value: String): Observable<any> {
  
  //   return this.http.get(this.BASE_URL + selectedFilter + '/' + value);
   
  // }
    
 
}


