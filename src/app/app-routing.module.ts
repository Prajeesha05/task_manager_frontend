import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskviewComponent } from './taskview/taskview.component';
import { NewListComponent } from './new-list/new-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {path: ' ', redirectTo: '/list', pathMatch: 'full' },
  {path:'new-list',component:NewListComponent},
  {path:'list/:listId',component:TaskviewComponent},
  {path:'list',component:TaskviewComponent},
  {path:'edit-list/:listId',component:EditListComponent},
  {path:'new-task',component:NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
