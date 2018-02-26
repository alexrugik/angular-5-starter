import {Component, Input, OnInit} from '@angular/core';
import {HeaderConfig, NavItems} from '@app/shared/declarations/header-config.declaration';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() config: NavItems;

  constructor() {
  }

  ngOnInit() {
  }

}
