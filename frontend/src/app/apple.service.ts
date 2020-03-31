import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getApplesForFilter(appleSelect:string): Observable<any> {
    let params1 = new HttpParams().set('country', appleSelect);
    return this.http.get('http://localhost:3000/beta/query1/country',{params:params1});
  }
    
 
}


