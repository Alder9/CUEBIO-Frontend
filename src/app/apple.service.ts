import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apple } from './apple';
import { APPLES } from './mock-apples';

@Injectable({
  providedIn: 'root'
})
export class AppleService {

  apples : Apple[];

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getApples(): Observable<any> {

    return this.http.get(this.baseurl + '/apples/', {headers: this.httpHeaders}).pipe(
    map((data:any) => { 
      console.log(data);
      this.apples = data})
  )}
 
}