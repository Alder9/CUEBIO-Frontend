import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Apple } from './apple';
import { APPLES } from './mock-apples';

@Injectable({
  providedIn: 'root'
})
export class AppleService {

  getApples(): Observable<Apple[]> {
    return of(APPLES);
  }

  constructor() { }
}
