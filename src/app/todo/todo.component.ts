import {Component, OnInit} from '@angular/core';
import {NavItems} from '@app/shared/declarations/header-config.declaration';
import {STATES} from '@app/shared/consts/states';

const tabConfig: NavItems[] = [
  {
    title: 'Todo add',
    stateName: STATES.APP_TODO_ADD
  },
  {
    title: 'Todo list',
    stateName: STATES.APP_TODO_LIST
  }
];


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tabConfig: NavItems[] = tabConfig;

  constructor() {
  }

  ngOnInit() {
  }
}
