import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AppleService {
  messages = [];

  private apples = new BehaviorSubject(null);
  sharedApples = this.apples.asObservable();
    
  constructor(private http: HttpClient) {}

  getApples(): Observable<any> {
    // return this.http.get(this.baseurl + '/apples/', {headers: this.httpHeaders});
    return this.http.get('http://localhost:3000/beta/query1'); // NEEDS TO BE CHANGES TO EC2 DOMAIN ON DEPLOYMENT
  }

  getFilteredApples(selectedFilter: String, value: String): Observable<any> {
    return this.http.get('http://localhost:3000/filter/' + selectedFilter + '/value/' + value);
  }
    
 
}


