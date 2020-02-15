import { Injectable } from '@angular/core';

import { Apple } from './apple';
import { AppleService } from './apple.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {

  show: boolean = false;

  apple: AppleService;

  showPanel() {
    this.show = true;
  }

  hidePanel() {
    this.show = false;
  }

  add(apple: AppleService) {
    this.apple = apple;
  }

  constructor() { }
}
