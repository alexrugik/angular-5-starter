import {Component, OnInit} from '@angular/core';
import {STATES} from '@app/shared/consts/states';
import {HeaderConfig} from '@app/shared/declarations/header-config.declaration';

export const headerConfig: HeaderConfig = {
  title: 'Angular Starter',
  navItems: [
    {
      title: 'Home',
      stateName: STATES.HOME,
      stateParams: {},
    },
    {
      title: 'About',
      stateName: STATES.ABOUT,
      stateParams: {},
    }
  ]
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  headerConfig: HeaderConfig = headerConfig;

  constructor() {
  }

  ngOnInit() {
  }

}
