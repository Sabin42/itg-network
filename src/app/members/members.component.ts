import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'itg-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
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
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
