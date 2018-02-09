import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Lazy page');
    meta.addTags([
      {
        name: 'author',
        content: 'my-app.com'
      }
    ]);
  }

  ngOnInit() {
  }

}
