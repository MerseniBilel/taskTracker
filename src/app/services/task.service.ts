import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task';

// import the httpclinet and httpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import the Observable and of( of i used to convert a variable into an observable )
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, this.httpOptions);
  }

  addTask(task: Task) : Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, this.httpOptions);
  }
}
