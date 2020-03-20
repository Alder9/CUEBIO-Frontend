import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AppleService {
  messages = [];

  // baseurl = "http://127.0.0.1:8000";
  // httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getApples(): Observable<any> {

    // return this.http.get(this.baseurl + '/apples/', {headers: this.httpHeaders});
    return this.http.get('http://172.17.0.2:3000/beta/query1');
    
  }
 
}


