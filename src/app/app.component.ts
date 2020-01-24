import { Component } from '@angular/core';
import { InfoPanelService } from './info-panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CUEBIO-Frontend';
  show: boolean = true;

  constructor(private infoPanelService: InfoPanelService) { }

}
