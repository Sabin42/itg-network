import { Component, OnInit, trigger, transition, animate, style } from '@angular/core';

@Component({
  selector: 'itg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
