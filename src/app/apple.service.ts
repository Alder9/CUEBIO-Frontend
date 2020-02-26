import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AppleService {
  messages = [];

  baseurl = "http://127.0.0.1:8000";
  // baseurl = 'https://kl4auc0304.execute-api.us-east-2.amazonaws.com/beta/query1'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getApples(): Observable<any> {

    return this.http.get(this.baseurl + '/apples/', {headers: this.httpHeaders});
    // return this.http.get('https://kl4auc0304.execute-api.us-east-2.amazonaws.com/beta/query1');
    // console.log(apple);
    
  }
 
}


