import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask="";
  id:number= 1;
  listOfTasks:{newTask:string, done: boolean,id:number}[]=[];
  getTask(data:any){
    this.newTask = data.target.value;
  }

  addNewTask()
  {
    let Task:{newTask:string, done: boolean,id:number}={newTask:this.newTask, done: false,id:this.id}
    if (Task.newTask=="")
      {
        alert("Enter Your task !")
        return 0;
      }
    this.listOfTasks.push(Task)
    this.newTask="";
    return 1; 
  }
  FinishTask(data:number)
  {
    console.log(data);
    data= data-1
    this.listOfTasks[data].done = true;
    console.log(this.listOfTasks[data].done);
  }

  constructor() { 
  }

  ngOnInit(): void {
  }
}
