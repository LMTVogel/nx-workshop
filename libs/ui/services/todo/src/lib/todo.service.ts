import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '@nx-workshop/shared/domain';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private endpoint = '/api/todos';

  constructor(private httpClient: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.endpoint);
  }

  public addTodo(text: string): Observable<Todo> {
    return this.httpClient.post<Todo>(this.endpoint, { text });
  }

  public removeTodo(id: number): Observable<Todo[]> {
    return this.httpClient.delete<Todo[]>(`${this.endpoint}/${id}`);
  }
}
