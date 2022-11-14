import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TodoListComponent, TodoItemComponent, TodoFormComponent],
  exports: [TodoListComponent, TodoItemComponent, TodoFormComponent],
})
export class UiTodoModule {}
