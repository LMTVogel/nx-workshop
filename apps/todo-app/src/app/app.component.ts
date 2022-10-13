import { Component, OnInit } from '@angular/core';
import { TodoService } from '@nx-workshop/ui/services/todo';
import { Todo } from '@nx-workshop/shared/domain';

@Component({
  selector: 'nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NX workshop To Do App';
  newTodoText = '';
  todos: Todo[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodoText).subscribe(() => this.getTodos());
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo.id).subscribe(() => this.getTodos());
  }

  validateTodo(): boolean {
    return this.newTodoText != '';
  }
}
