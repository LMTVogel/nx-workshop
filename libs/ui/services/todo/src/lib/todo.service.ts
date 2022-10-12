import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  public getTodos(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3333/api');
  }
}
