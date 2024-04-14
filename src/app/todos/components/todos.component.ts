import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TodoInterface } from '../models/Todo.interface';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (secondPendingTodo$ | async; as secondPendingTodo) {
      <p><strong>ID: </strong>{{secondPendingTodo.id}}</p>
      <p><strong>Title: </strong>{{secondPendingTodo.title}}</p>
      <p><strong>Status: </strong>{{secondPendingTodo.status}}</p>
    }
  `,
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  secondPendingTodo$!: Observable<TodoInterface>;

  ngOnInit(): void {
    this.secondPendingTodo$ = this.todosService.getTodos().pipe(
      map((todos) => todos.filter((todo)=> todo.status === 'pending')[1])
    );
  }
}
