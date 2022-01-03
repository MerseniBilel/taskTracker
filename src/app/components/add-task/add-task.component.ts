import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  title: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.title) {
      console.log('no');
      return;
    }

    const newTask: Task = {
      text: this.title,
      day: this.day,
      reminder: this.reminder,
    };

    // emit - send task to parrent componenet
    this.onAddTask.emit(newTask);

    // clear the form
    this.title = '';
    this.day = '';
    this.reminder = false;
  }
}
