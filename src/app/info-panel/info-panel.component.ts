import { Component, OnInit } from '@angular/core';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  constructor(public infoPanelService: InfoPanelService) { }

  ngOnInit() {
  }

}
