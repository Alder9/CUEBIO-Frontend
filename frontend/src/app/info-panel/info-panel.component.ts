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

  getIsConfirmed() {
    if(this.infoPanelService.apple.isConfirmed == "C") {
      return "True";
    }
    else {
      return "False";
    }
  }

  getGenotypes() {
    if(this.infoPanelService.apple.genotypes == -1) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.genotypes;
    }
  }

  getTreeHeight() {
    if(this.infoPanelService.apple.treeHeight == -1) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.treeHeight + "\'";
    }
  }

  getTreeDripline() {
    if(this.infoPanelService.apple.treeDripLine == -1) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.treeDripLine + "\"";
    }
  }

  getTrunkDiameter() {
    if(this.infoPanelService.apple.trunkDiameter == -1) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.trunkDiameter + "\"";
    }
  }

  getFireBlight() {
    if(this.infoPanelService.apple.fireBlight == 1) {
      return "True";
    }
    else {
      return "False";
    }
  }

  add(apple : Apple) {
    this.infoPanelService.add(apple);
  }

  constructor(public infoPanelService: InfoPanelService) { }

  ngOnInit() {
  }

}
