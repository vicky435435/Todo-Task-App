import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  TaskRecord:Task = {
    id:0,
    task: ''

  }

  allTask: any;

  

  constructor(private taskS:TaskService, private router:Router){

  }
  ngOnInit(): void {
  this.getAllTasks()
  }

  addTasks(){
    this.taskS.addTask(this.TaskRecord).subscribe((data)=>{
      this.router.navigate(["/"])
    })
  }



  getAllTasks(){
    this.taskS.getAllTask().subscribe((data)=>{
      this.allTask = data;
      console.log(this.allTask)
    })
  }

  deleteTasks(data:any){
    this.taskS.deleteTask(data.id).subscribe(res =>{
      // alert("")
    })
  }
  

}
