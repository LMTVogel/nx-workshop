import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@nx-workshop/shared/domain';

@Component({
  selector: 'nx-workshop-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input()
  items!: Todo[];

  @Input()
  editable!: boolean;

  @Output()
  deleteClick = new EventEmitter<Todo>();

  onDeleteClick(item: Todo) {
    this.deleteClick.emit(item);
  }
}
