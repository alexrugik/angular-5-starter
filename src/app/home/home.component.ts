import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home page');
    meta.addTags([
      {
        name: 'test',
        content: 'test Content'
      }
    ]);
  }

  ngOnInit() {
  }

}
