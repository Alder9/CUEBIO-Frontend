import { Component } from '@angular/core';
import { InfoPanelService } from './info-panel.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  animations: [
    trigger('ipInsertRemoveTrigger', [
      transition(':enter', [
        // style({ transform: 'translateX(0%)' }),
        // animate(100, style({ transform: 'translateX(-100%)'}))
        style({width: 0}),
        animate(150, style({width: '*'})),
      ]),
      transition(':leave', [
        // animate(100, style({ transform: 'translateX(-100%)'}))
        // animate('5s', style({ opacity: 0 }))
        style({width: '*'}),
        animate(150, style({width: 0})),
      ])
    ])
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CUEBIO-Frontend';
  show: boolean = true;

  constructor(private infoPanelService: InfoPanelService) { }

  optionsList: Array<any> = [
    { name: 'Tree Tag ID', attributes: ['Number Input'] },
    { name: 'Final Cultivar', attributes: ['Ben Davis', 'Fameuse', 'McMahan', 'Delicious', 'Salome', 'McIntosh Summerland Reed', 'Wealthy', 'Irene', 'Haralson', 'Lodi', 'Dolgo', 'Whitney Crab', 'Gimes Golden', ' Winesap', 'Fameuse', 'Duchess/Borowitsky', 'Korei', 'Glenorchie', 'Red Baron', 'Jonathan', 'Arkansas Black', 'Early Strawberry', 'Mann', 'Dorsett Golden', 'Crimson Beauty', 'Empire', 'Hopa', 'Northern Spy', 'Huan Guan', 'King David', 'Imperial Stayman', 'Red Dijmanszoet', 'Secor', 'Haas','Cortland' 'Rome Beauty Law', 'Northwest Greening', 'Yellow Transparent'. 'Tchistaikovka', 'Earliblaze', 'Pepin Litovskit'] },
    { name: 'Country', attributes: ['United States', 'Canada', 'Former Soviet Union', 'United Kingdom', 'Japan', 'Bahamas', 'Netherlands/UK', 'Russia', 'China'] },
    { name: 'Tree Height', attributes: ['Number Input'] },
    { name: 'Trip Dripline', attributes: ['Number Input'] },
    { name: 'Fruit Hanging Diameter', attributes: ['Number Input'] },
  ];
  attributes: Array<any>;
  changeOptions(count) {
    this.attributes = this.optionsList.find(con => con.name == count).attributes;
  }

}

