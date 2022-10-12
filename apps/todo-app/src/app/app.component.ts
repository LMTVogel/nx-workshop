import { Component, OnInit } from '@angular/core';
import { TodoService } from '@nx-workshop/ui/services/todo';

@Component({
  selector: 'nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NX workshop To Do App';
  newTodoText = '';

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos();
  }

  addTodo(): void {
    console.log(this.newTodoText);
    this.todoService.addTodo(this.newTodoText);
  }

  validateTodo(): boolean {
    return this.newTodoText != '';
  }
}
