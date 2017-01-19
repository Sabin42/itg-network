import { Component, OnInit, Input, trigger, state, style, transition,keyframes, animate} from '@angular/core';

@Component({
  selector: 'itg-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
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
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
