import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Todo} from '@app/todo/todo.model';
import {TodoService} from '@app/todo/todo.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todoList: Observable<Todo[]>;
  name: string;
  nameStream$ = new BehaviorSubject('test25');

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.setTodoList();
    this.nameStream$
      .map(name => {
        return {id: 0, name};
      })
      .subscribe((user) => {
        console.log(user);
        this.name = user.name;
      });
  }

  setTodoList() {
    this.todoList = this.todoService.getTodoList();
  }

  onChangeName(name: string) {
    this.nameStream$.next(name);
  }

}
