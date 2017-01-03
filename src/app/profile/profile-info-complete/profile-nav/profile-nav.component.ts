import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'itg-profile-nav',
  templateUrl: 'profile-nav.component.html',
  styleUrls: ['profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  constructor( route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
