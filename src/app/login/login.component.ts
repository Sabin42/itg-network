import { Component, Input, trigger, state, style, transition,keyframes, animate} from '@angular/core';

@Component({
  selector: 'itg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'"
   },
  animations: [
    trigger('routeAnimation', [
      transition('void => *', [
            animate(300, keyframes([
                style({ opacity: 0, transform: 'scale(.5)', offset: 0}),
                style({ opacity: 1, transform: 'scale(1)', offset: 1}),
            ]))
        ]),
    ])
  ]
})
export class LoginComponent{

  constructor() { }

}
