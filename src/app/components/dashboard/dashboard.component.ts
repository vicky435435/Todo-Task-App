import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  TaskRecord: Task = {
    id: 0,
    task: '',
  };

  allTask: any;

  //Create  Variable for hold value
  taskObj: Task = new Task();
  taskArry: [] = [];
  addTaskData: string = '';

  constructor(private taskS: TaskService, private router: Router) {}
  ngOnInit(): void {

    this.getAllTasks();
    this.taskArry = [];
    this.taskObj = new Task();

  }

  addTasks() {
    this.taskObj.task = this.addTaskData
    this.taskS.addTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
        this.addTaskData =''
      },
      (err) => {
        alert(err);
      }
    );
  }

  //  get all task

  getAllTasks() {
    this.taskS.getAllTask().subscribe(
      (res) => {
        this.allTask = res;
      },
      (err) => {
        alert('Unable to find task');
      }
    );
  }

  //  Edit Task 

  editTask(){
    this.taskS.updateTask(this.taskObj).subscribe(res =>{
     this.ngOnInit()
    },err =>{
      alert('Unable to Update task')
    })
  }

  

  deleteTasks(task : Task) {
    this.taskS.deleteTask(task).subscribe((res) => {
      this.ngOnInit()
    }, err =>{
      alert('Delete task')
    });
  }

}
