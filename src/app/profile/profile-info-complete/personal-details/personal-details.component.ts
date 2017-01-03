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
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(50%)', opacity: 0}),
        animate('0.5s ease-in')
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
