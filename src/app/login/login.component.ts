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
                animate(1000, keyframes([
                    style({ opacity: 0, transform: 'translateY(-30px)', offset: 0} ),
                    style({ opacity: 1, transform: 'translateY(20px)', offset: .4} ),
                    style({ opacity: 1, transform: 'translateY(-15px)', offset: .7} ),
                    style({ opacity: 1, transform: 'translateY(5px)', offset: .9} ),
                    style({ opacity: 1, transform: 'translateY(0px)', offset: 1} ),
                ]))
            ]),
      transition('* => void', [])
    ])
  ]
})
export class LoginComponent{

  constructor() { }

}
