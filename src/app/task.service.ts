import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestServices:WebRequestService) { }

  createList(title:String){
    //web request to create list
    return this.webRequestServices.post('list',{title});
  }
  getList(){
    return this.webRequestServices.get('list');
  }
  getTasks(listId:string){
    return this.webRequestServices.get(`list/${listId}/tasks`);

  }
  delList(listId:string){
    return this.webRequestServices.delete(`list/${listId}`)
  }
  editList(listId:string,title:string){
    return this.webRequestServices.patch(`list/${listId}`,{title})
  }
  createTask(listId:string,title:String){
    //web request to create list
    return this.webRequestServices.post(`list/${listId}/tasks`,{title});
  }

}
