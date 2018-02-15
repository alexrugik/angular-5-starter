import {Injectable} from '@angular/core';

@Injectable()
export class TestService {
  constructor() {
  }

  getData(): number {
    return 1;
  }
}
