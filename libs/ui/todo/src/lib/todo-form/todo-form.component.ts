import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nx-workshop-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    text: new FormControl('', Validators.required),
  });

  @Output()
  createItem = new EventEmitter<string | null>();

  onSubmit() {
    if (!this.todoForm.valid) {
      return;
    }

    this.createItem.emit(this.todoForm.value.text);
    this.todoForm.reset();
  }
}
