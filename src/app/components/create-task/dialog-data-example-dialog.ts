import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/app/globals';
import { Task } from 'src/models/task';
import { CreateTaskComponent } from './create-task.component';



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogData {

  tasks: Task[];
  contador: number;
  constructor(globals: Globals) {
    this.tasks = globals.tasks
    this.contador = 3
  }

  title: string = ""
  description: string = ""

  save() {
    let task = new Task()
    task.id = Math.random() * (100 - this.contador) + this.contador
    task.title = this.title
    task.description = this.description
    this.tasks.push(task)
    this.contador++
    console.log(this.tasks)
  }
}