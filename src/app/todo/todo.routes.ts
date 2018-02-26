import {Ng2StateDeclaration} from '@uirouter/angular';
import {STATES} from '@app/shared/consts/states';
import {TodoComponent} from '@app/todo/todo.component';
import {AddTodoComponent} from '@app/todo/add-todo/add-todo.component';
import {TodoListComponent} from '@app/todo/todo-list/todo-list.component';

export const todoState: Ng2StateDeclaration = {
  name: STATES.APP_TODO,
  url: '/tasks',
  component: TodoComponent
};

export const todoAddState: Ng2StateDeclaration = {
  name: STATES.APP_TODO_ADD,
  url: '/add',
  component: AddTodoComponent
};

export const todoListState: Ng2StateDeclaration = {
  name: STATES.APP_TODO_LIST,
  url: '/list',
  component: TodoListComponent
};

export const todoStates: Ng2StateDeclaration[] = [
  todoState,
  todoAddState,
  todoListState
];
