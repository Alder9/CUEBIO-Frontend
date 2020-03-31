import { Component, OnInit } from '@angular/core';
import { AppleService } from '../apple.service';
import { Apple } from '../apple';

@Component({
  selector: 'app-fiter',
  templateUrl: './fiter.component.html',
  styleUrls: ['./fiter.component.css']
})
export class FiterComponent implements OnInit {

  constructor(public appleService: AppleService) { }

  apples: Apple[] = [];
  applesFilterSelected: String;

  onFilterSelected(applesSelected:any):void{
    this.appleService.getApplesForFilter(applesSelected)
    .subscribe(
      data => {
        this.apples = data;
    })
  }

  optionsList: Array<any> = [
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
