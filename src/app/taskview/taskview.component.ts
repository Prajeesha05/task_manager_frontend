import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrl: './taskview.component.css'
})


export class TaskviewComponent implements OnInit {

  list: any;
  tasks: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }
  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        // this.taskService.getTasks(params['listId']).subscribe((tasks: any) =>{
        //   this.tasks=tasks;
        // }
        // )
      }

    )

    this.taskService.getList().subscribe(
      (list: object) => {
        this.list = list;


      })

     
  }

  TaskView(id:string){
    this.taskService.getTasks(id).subscribe(
      (tasks:object)=>{
        this.tasks=tasks;
      })
  }
  deleteList(id:string){
    this.taskService.delList(id).subscribe(
      (list:object)=>{
        this.list=list
       
      }
    )
    
  }
  

}


