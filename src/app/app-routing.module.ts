import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'todolist' , component:TodoListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
