import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from '@app/todo/todo.model';
import {HttpClient} from '@angular/common/http';

const url = 'http://localhost:3000/tasks';

@Injectable()
export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  getTodoList(): Observable<any> {
    return this.httpClient.get(url);
  }

}
