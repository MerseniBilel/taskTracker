import { Injectable } from '@angular/core';
import { TASKS } from "../mock-tasks";
import { Task } from "../../interfaces/task";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS); // change TASKS to an observable 
    return tasks;
  }

}
