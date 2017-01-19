import { Component, OnInit, Input, trigger, state, style, transition, keyframes, animate} from '@angular/core';

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
      transition('void => *', [
        style({ opacity: 0}),
        animate('.4s ease-in')
      ])
    ])
  ]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
