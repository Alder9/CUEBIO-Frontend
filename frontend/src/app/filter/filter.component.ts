import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { AppleService, AppleResponse } from '../apple.service';



interface Option {
  name: string;
  attributes: Array<string>;
  queryLabel: Array<String>;
};

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  applesFilterSelected: String;
  attrFilterSelected: String;
  operatorSelected: String;
  showNumberInput: boolean = false;
  showAttributeSelect: boolean = false;
  showEqualTo: boolean = false;
  showGreaterLessThanSelect: boolean = false;


  constructor(public appleService: AppleService, public infoPanelService: InfoPanelService) { }

  
  number = new FormControl('');

  /* Controls showing number input or select */
  onFilterSelected(): void{
    const found = this.getOption();

    this.showEqualTo = false;
    this.showNumberInput = false;
    this.showAttributeSelect = false;
    this.showGreaterLessThanSelect = false;
    
    if(found.attributes[0] == 'Number Input') {
      this.showNumberInput = true;

      if(found.name == "Tree Tag ID") {
        this.showEqualTo = true;
      }
      else {
        this.showGreaterLessThanSelect = true;
      }
    }
    else {
      this.showAttributeSelect = true;
    }
  }

  getAttributes(): Array<String> {
    const option = this.getOption();
    if (option == null) {
      return [''];
    }
    else{
      return option.attributes;
    }
  }

  getOption(): Option {
    return this.optionsList.find(element => element.name == this.applesFilterSelected);
  }

  filter(): void {
    if(this.applesFilterSelected == null) {
      return;
    }

  
    const filterOption = this.getOption();

    if(this.showAttributeSelect) {
      console.log(filterOption.queryLabel[0]);
      console.log(this.attrFilterSelected);
      this.appleService.getFilteredApples(filterOption.queryLabel[0], this.attrFilterSelected);
      
     
    }
    /*
    else if(this.showNumberInput && this.number.value !== null){
      // Do the filter - successful
      if(filterOption.name == 'Tree Tag ID') {
        // Don't need a Min/Max suffix
        // this.appleService.getFilteredApples(filterOption.queryLabel[0], this.number.value)
        //   .subscribe(apples => {});
        
      } else {
        // Need a suffix
        if(this.operatorSelected == '>') {
          // this.appleService.getFilteredApples(filterOption.queryLabel[0], this.number.value)
          // .subscribe(apples => {});
          
        } else {
          // this.appleService.getFilteredApples(filterOption.queryLabel[1], this.number.value)
          // .subscribe(apples => {});
       
        }
      }
    }
    */
  }

  resetfilter(): void {
    // TODO: reset the map
    if(this.applesFilterSelected == null) {
      return;
    }
    const filterOption = this.getOption();
    console.log('resetfilter ',filterOption.name);
    this.applesFilterSelected = null;
    
    // this.filter();

    // this.appleService.getApples();
  }

  
         
  // TODO: Add Final Cultivar
  optionsList: Array<Option> = [
    { name: 'Tree Tag ID', attributes: ['Number Input'], queryLabel: ['TreeTagId'] },
    { name: 'Country', attributes: ['United States', 'Canada', 'Former Soviet Union', 'United Kingdom', 'Japan', 'Bahamas', 'Netherlands/UK', 'Russia', 'China'], queryLabel: ['Country'] },
    { name: 'Tree Height', attributes: ['Number Input'], queryLabel: ['TreeHeightMin', 'TreeHeightMax'] },
    { name: 'Trip Dripline', attributes: ['Number Input'], queryLabel: ['DriplineMin', 'DriplineMax'] },
    { name: 'Fruit Hanging Diameter', attributes: ['Number Input'], queryLabel: ['FruitDiameterMin', 'FruitDiameterMax'] },
    { name: 'Final Cultivar', attributes: ['Cider'], queryLabel: ['FinalCultivar'] },
  ];

  ngOnInit() {
    // this.appleService.getApples();
    // this.appleService.applesSource.subscribe(this.appleObserver);
    // this.filter();
  }
  
}
