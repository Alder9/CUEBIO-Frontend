import { Injectable } from '@angular/core';

import { Apple } from './apple';


@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {

  show: boolean = false;

  apple: Apple;

  showPanel() {
    this.show = true;
  }

  hidePanel() {
    this.show = false;
  }

  add(apple: Apple) {
    this.apple = apple;
  }

  constructor() { }
}
