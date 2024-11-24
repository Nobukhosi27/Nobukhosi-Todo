import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { TodoComponent } from './components/todo/todo.component';
import { authhGuard } from './guards/authh.guard';

export const routes: Routes = [

    {path: '', redirectTo:'login', pathMatch:'full'},
{path: 'login', component:LoginComponent},
{path: 'todo', component:  TodoComponent , canActivate:[authhGuard] },

];
