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


}

