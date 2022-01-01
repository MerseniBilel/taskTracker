import { Component, OnInit } from '@angular/core';

import { TASKS } from "../../mock-tasks";
import { Task } from "../../../interfaces/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList : Task[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
