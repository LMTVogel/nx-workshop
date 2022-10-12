import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Todo } from '@nx-workshop/shared/domain';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Subject<Todo[]> = new Subject<Todo[]>();

  public todos$ = this.todos.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getTodos(): void {
    this.httpClient.get<Todo[]>('/api/todos').subscribe((todos) => {
      this.todos.next(todos);
    });
  }

  public addTodo(text: string): void {
    this.httpClient
      .post<Todo[]>('/api/todos', {
        text,
      })
      .subscribe((todos) => {
        this.todos.next(todos);
      });
  }
}
