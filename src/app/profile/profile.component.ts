import { Component, OnInit,trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'itg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
