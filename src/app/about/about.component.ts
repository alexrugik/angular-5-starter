import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My About page');
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
