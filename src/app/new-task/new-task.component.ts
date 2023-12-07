import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, response } from 'express';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit{

  listId!: string;

  constructor(private taskService:TaskService,private router:Router){}

  ngOnInit() {
    
  }
  createTask(title:string){
    this.taskService.createTask(this.listId,title).subscribe((response:any)=>{
      console.log(response);
    })
  }

}
