import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() config;
  @Output() searchUpdate = new EventEmitter<string>();
  text = '';

  constructor() {
  }

  ngOnInit() {

  }

  onSearch(text: string) {
    console.log(text);
    this.searchUpdate.emit(text);
    this.text = '';
  }

}
