import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo.component';
import {UIRouterModule} from '@uirouter/angular';
import {todoStates} from '@app/todo/todo.routes';
import {TodoService} from '@app/todo/todo.service';
import {AppDependenciesModule} from '@app/app-dependencies.module';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FeatureModule} from '@app/shared/feature/feature.module';

@NgModule({
  imports: [
    CommonModule,
    AppDependenciesModule,
    FeatureModule,
    UIRouterModule.forChild({
        states: todoStates
      }
    )
  ],
  providers: [
    TodoService
  ],
  declarations: [
    TodoComponent,
    AddTodoComponent,
    TodoListComponent
  ]
})
export class TodoModule {
}
