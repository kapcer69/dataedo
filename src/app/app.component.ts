import { Component } from '@angular/core';
import { TodosComponent } from './todos/components/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent],
  template: `<app-todos />`,
  providers: []
})
export class AppComponent {}
