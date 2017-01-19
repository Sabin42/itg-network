import { Component, OnInit, Input, trigger, state, style, transition,keyframes, animate} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'itg-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
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
export class PersonalDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  onNavigate(){
    this.router.navigate(['/profile/settings']);
  }

  ngOnInit() {
  }

}
