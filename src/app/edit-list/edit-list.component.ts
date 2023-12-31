import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.css'
})
export class EditListComponent implements OnInit{
  constructor(private route:ActivatedRoute, private taskService:TaskService, private router:Router){}

  listId!: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.listId=params['listId'];
            }
    )
  }
  updateList(title:string){
    this.taskService.editList(this.listId,title).subscribe(()=>{
      this.router.navigate(['/list',this.listId])

    })
    


  }

}
