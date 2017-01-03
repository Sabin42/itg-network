import { Component, OnInit, Input, trigger, state, style, transition,keyframes, animate} from '@angular/core';

@Component({
  selector: 'itg-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'"
   },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(50%)', opacity: 0}),
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
