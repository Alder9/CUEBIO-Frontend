import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AppleService {
  messages = [];



  constructor(private http: HttpClient) {}

  getApples(): Observable<any> {

    
    return this.http.get('http://localhost:3000/beta/query1');
    
  }
 
}


