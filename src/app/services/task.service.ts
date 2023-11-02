import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   baseUrl!:string;
   constructor(private http:HttpClient) {
    this.baseUrl ='  http://localhost:3000/task'
   }

  //  add task 

  addTask(task:Task):Observable<Task[]>{
    return this.http.post<Task[]>(this.baseUrl,task)
  }
  
  // all task 

  getAllTask():Observable<Task>{
     return this.http.get<Task>(this.baseUrl)
  }

  // Delte task

  deleteTask(task : Task):Observable<Task>{
    return this.http.delete<Task>(this.baseUrl+'/'+task.id)
  }

  // update task

  updateTask(task : Task):Observable<Task>{
    return this.http.put<Task>(this.baseUrl+'/'+task.id, task)
  }


}
