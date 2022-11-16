import { Component } from '@angular/core';
import { Todo } from '@nx-workshop/shared/domain';
import { TodoService } from '@nx-workshop/ui/services/todo';

@Component({
  selector: 'nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bezoeker-app';
  todos: Todo[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(text: string | null): void {
    if (!text) {
      return;
    }

    this.todoService.addTodo(text).subscribe(() => this.getTodos());
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo.id).subscribe(() => this.getTodos());
  }
}
