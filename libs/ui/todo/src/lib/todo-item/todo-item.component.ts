import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '@nx-workshop/shared/domain';

@Component({
  selector: 'nx-workshop-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input()
  item!: Todo;

  @Input()
  editable!: boolean;

  @Output()
  deleteClick = new EventEmitter<Todo>();

  onDeleteClick() {
    this.deleteClick.emit(this.item);
  }
}
