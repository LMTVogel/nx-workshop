import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '@nx-workshop/shared/domain';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/api/todos');
  }

  public addTodo(text: string): Observable<Todo> {
    return this.httpClient.post<Todo>('/api/todos', { text });
  }
}
