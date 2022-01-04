import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showForm : boolean = false;
  private subject  = new Subject<any>();

  constructor() { }

  toggleForm() : void {
    this.showForm = !this.showForm;
    this.subject.next(this.showForm);
  }

  onToggle() : Observable<any>{
    return this.subject.asObservable();
  }

}
