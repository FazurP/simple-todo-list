import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  tasks: Task[]
  
  constructor(globals:Globals) {
    this.tasks = globals.tasks
   }

  ngOnInit(): void {
   
  }

  deleteTask(task:Task){
    this.tasks = this.tasks.filter(x => x.id !== task.id)
  }

}
