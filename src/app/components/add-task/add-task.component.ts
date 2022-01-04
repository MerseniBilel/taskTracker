import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  title: string = '';
  day: string = '';
  reminder: boolean = false;

  showForm : boolean = false;
  subscription : Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showForm = value); 
  }

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
