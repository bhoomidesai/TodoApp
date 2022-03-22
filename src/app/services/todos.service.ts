import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  get():Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
  }

  delete(todo:Todo):Observable<Todo>{
    return this.http.delete<Todo>('https://jsonplaceholder.typicode.com/todos/'+todo.id);
  }
  addTodo(todo:any):Observable<Todo>{
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',todo);
  }
}
