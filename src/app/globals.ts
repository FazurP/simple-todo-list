import { Injectable } from '@angular/core';
import { Task } from 'src/models/task';

@Injectable()
export class Globals {
    tasks:Task[] = [
        {
          id:1,
          title:"Tarea de informatica",
          date: new Date(),
          description: "Investigar sobre razor"
        },
        {
          id:2,
          title:"Tarea de informatica",
          date: new Date(),
          description: "Investigar sobre net core"
        }
      ]
  
}