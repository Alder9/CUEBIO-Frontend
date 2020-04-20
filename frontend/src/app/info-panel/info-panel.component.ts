import { Component, OnInit } from '@angular/core';
import { Apple } from '../apple';
import { InfoPanelService } from '../services/info-panel.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  images: string[];

  imageObserver = {
    next: x => this.images = x,
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  constructor(public infoPanelService: InfoPanelService) { 
    this.images = [];
  }

  ngOnInit() {
    this.infoPanelService.imagesSource.subscribe(this.imageObserver);
  }

  // Not working as intended - struggling with images rotating
  loadImages(x) {
    // this.images = x;
    x.forEach(function(img) {
      let imageRoot = document.createElement('div');
      imageRoot.className = 'responsive';
      let imageGallery = document.createElement('div');
      imageGallery.className = 'gallery';


      var image = new Image();
      image.src = img;
      var w = image.naturalWidth || image.width,
          h = image.naturalHeight || image.height;

      if(w > h) {
        image.style.transform = 'rotate(90deg)';
      }
      image.style.width = '200px';
      imageGallery.appendChild(image);
      imageRoot.appendChild(imageGallery);
      
      document.getElementById('apple-images').appendChild(imageRoot);

      this.images.push(image);
      console.log(this.images);
    }, this)
  }

  add(apple : Apple) {
    this.infoPanelService.add(apple);
  }

  onClose() {
    this.infoPanelService.hidePanel();
  }

  getTreeTagId() {
    if(this.infoPanelService.apple.tree_tag_id == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.tree_tag_id;
    }
  }

  getGenetics() {
    if(this.infoPanelService.apple.genetics == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.genetics;
    }
  }

  getSpecies() {
    if(this.infoPanelService.apple.species == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.species;
    }
  }

  getFinalCultivar() {
    if(this.infoPanelService.apple.finalCultivar == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.finalCultivar;
    }
  }

  getSynonym() {
    if(this.infoPanelService.apple.synonym == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.synonym;
    }
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
    if(this.infoPanelService.apple.genotypes == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.genotypes;
    }
  }

  getCountry() {
    if(this.infoPanelService.apple.country == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.country;
    }
  }

  getTreeHeight() {
    if(this.infoPanelService.apple.treeHeight == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.treeHeight + "\'";
    }
  }

  getTreeDripline() {
    if(this.infoPanelService.apple.treeDripLine == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.treeDripLine + "\"";
    }
  }

  getTrunkDiameter() {
    if(this.infoPanelService.apple.trunkDiameter == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.trunkDiameter + "\"";
    }
  }

  getFireBlight() {
    if(this.infoPanelService.apple.fireBlight == 1.0) {
      return "True";
    }
    else {
      return "False";
    }
  }

  getUse() {
    if(this.infoPanelService.apple.use == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.use;
    }
  }

  getFruitHanging() {
    if(this.infoPanelService.apple.fruitHanging == null) {
      return "NA";
    }
    else {
      return this.infoPanelService.apple.fruitHanging;
    }
  }

}
