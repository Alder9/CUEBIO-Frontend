import { Component, OnInit } from '@angular/core';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  onClose() {
    this.infoPanelService.hidePanel();
  }

  constructor(public infoPanelService: InfoPanelService) { }

  ngOnInit() {
  }

}
