import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

export interface ToDo{
id:number;
task:string;
priorities:any;
duedate:any;
completed:boolean;


}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,NgFor,NgClass, CommonModule, NgStyle],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {


  dynamicCss ={
    "color": "red",
  
  }
  
  todoList: ToDo [] =[] ;
newTask: string =''

constructor(private authService:AuthService){}

addTask():void{
  if(this.newTask.trim()!== ''){

    const newTodo: ToDo ={
      id: Date.now(),
      task: this.newTask,
      duedate: new Date(),
      priorities: '',
      completed: false
    }
    this.todoList.push(newTodo)
    this.newTask = ''

  

    
  }
}
toggleCompleted(index:number):void{
  
  this.todoList[index].completed = !this.todoList[index].completed 
   
}
deleteTask(id:number): void{
  this.todoList= this.todoList.filter(item=> item.id !== id)
  console.log(this.todoList);
  

}


updateTask(id:number): void{
  this.todoList= this.todoList.filter(item=> item.id !== id)
  console.log(this.todoList);
  


}



}

