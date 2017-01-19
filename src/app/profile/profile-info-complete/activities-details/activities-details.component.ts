import { Component, OnInit, Input, trigger, state, style, transition,keyframes, animate} from '@angular/core';

@Component({
  selector: 'itg-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.scss'],
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
export class ActivitiesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
