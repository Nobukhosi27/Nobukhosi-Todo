import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  activeForm: 'login' | 'register' ='login';

  _register:registerUser = new registerUser();

  _login: loginUser = new loginUser();
  
constructor(private snackbar: MatSnackBar, private router:Router  ){}

  toggleForm(form: 'login' | 'register'){
  
    this.activeForm = form;


  }

  registerForm(){

debugger;

    const localusers = localStorage.getItem('users');
    if(localusers != null){
      const users =JSON.parse(localusers)
      users.push(this._register);
      localStorage.setItem('users' , JSON.stringify(users))

          }else{
            const users =[];
            users.push(this._register);
            localStorage.setItem('users' , JSON.stringify(users))
          }
          this.snackbar.open('User register succcessfully', 'Close');
  }
loginForm(){
  debugger;
  const localusers = localStorage.getItem('users');
  if(localusers != null){
    const users = JSON.parse(localusers);
     const isUserExist =users.find((user:registerUser)=> user.email == this._login.email && user.password == this._login.password)
     if(isUserExist != undefined ) 

     {this.snackbar.open('Login Successfully', 'Close');

      localStorage.setItem('users', JSON.stringify(users));

      this.router.navigateByUrl('/todo')

     }else this.snackbar.open('Email or Password is incorrect')
  }
 
}
}

export class registerUser{
  name: string;
  email: string;
  password: string;


  constructor(){
    this.name ="",
    this.email="",
    this.password= ""


  }
}

export class loginUser{
  email: string;
  password: string;


  constructor(){
  
    this.email="",
    this.password= ""


  }
}

