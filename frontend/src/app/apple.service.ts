import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AppleService {
  messages = [];

  private thomasURL = "https://vndmcwy7p1.execute-api.us-east-2.amazonaws.com/beta/query1";
  private localhost3000query = 'http://localhost:3000/beta/query1';

  public httpGETFiltered;

  private apples = new BehaviorSubject(null);
  sharedApples = this.apples.asObservable();
    
  constructor(private http: HttpClient) {}

  getApples(): Observable<any> {
    // return this.http.get(this.baseurl + '/apples/', {headers: this.httpHeaders});
    return this.http.get('http://localhost:3000/beta/query1'); // NEEDS TO BE CHANGES TO EC2 DOMAIN ON DEPLOYMENT
  }

  getFilteredApples(selectedFilter: String, value: String): Observable<any> {
    console.log("getting filtered apples");
    console.log(selectedFilter);
    console.log(value);
    console.log('http://localhost:3000/filter/' + selectedFilter + '/value/' + value);
    this.httpGETFiltered = this.http.get('http://localhost:3000/filter/' + selectedFilter + '/value/' + value)
    console.log(this.httpGETFiltered);
    return this.httpGETFiltered;
  }
    
 
}


