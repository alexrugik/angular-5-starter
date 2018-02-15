import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TestService} from '@app/core/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title, private testService: TestService) {
    title.setTitle('My Home page');
    meta.addTags([
      {
        name: 'test',
        content: 'test Content'
      }
    ]);
    console.log(this.testService.getData());
  }

  ngOnInit() {
  }

}
