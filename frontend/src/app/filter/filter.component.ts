import { Component, OnInit } from '@angular/core';
import { AppleService } from '../apple.service';
import { FormControl } from '@angular/forms';
import { Apple } from '../apple';

interface Option {
  name: string;
  attributes: Array<string>;
};

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public appleService: AppleService) { }

  apples: Apple[] = [];
  applesFilterSelected: String;
  attrFilterSelected: String;
  showNumberInput: boolean = false;
  showAttributeSelect: boolean = false;

  number = new FormControl('');

  /* Controls showing number input or select */
  onFilterSelected(): void{
    console.log(this.applesFilterSelected);
    const found = this.getOption();
    
    if(found.attributes[0] == 'Number Input') {
      this.showAttributeSelect = false;
      this.showNumberInput = true;
    }
    else {
      this.showNumberInput = false;
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
    console.log(this.number.value);

    // See if the filter selected requires number

    if(this.applesFilterSelected == null || this.number.value == '') {
      console.log("Nothing selected");
    }
    else {
      // Do the filter - successful
    }
  }

  optionsList: Array<Option> = [
    { name: 'Tree Tag ID', attributes: ['Number Input'] },
    { name: 'Genetics', attributes: ['Malus'] },
    { name: 'Specie', attributes: ['Domestica', 'Hybrid', 'X adstringens'] },
    { name: 'Country', attributes: ['United States', 'Canada', 'Former Soviet Union', 'United Kingdom', 'Japan', 'Bahamas', 'Netherlands/UK', 'Russia', 'China'] },
    { name: 'Genotype', attributes: ['Number Input'] },
    { name: 'Tree Height', attributes: ['Number Input'] },
    { name: 'Trip Dripline', attributes: ['Number Input'] },
    { name: 'Fruit Hanging Diameter', attributes: ['Number Input'] },
  ];
  // attributes: Array<any>;
  // changeOptions(count) {
  //   this.attributes = this.optionsList.find(con => con.name == count).attributes;
  // }

  ngOnInit() {
  }

}
