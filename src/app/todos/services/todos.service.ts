import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { TodoInterface } from "../models/Todo.interface";

@Injectable()
export class TodosService {

  constructor (private readonly http: HttpClient) {}

  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(environment.baseUrl);
  }
}
