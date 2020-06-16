import { Component, OnInit } from '@angular/core';

import { StateService } from '../../services/state.service';

@Component({
  selector: 'worm-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  logo = 'assets/img/logo.png';
  navLinks = [
    { path: '', label: 'Articles', icon: 'home' },
    { path: 'about', label: 'About', icon: 'pets' },

  ];

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }

}
