
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   values: string[] = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { user } from './Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 
  private users :user[] = [
    { emailid: 'akshita@gmail.com', password : '12345' }
  ]

  dashboardData : string[] =  [
    "Welcome To-do application Dashboard"
  ]

  getUserByemailid(emailid: any): user | undefined {
    return this.users.find(x => x.emailid == emailid);
  }
  
  getDashboard() : string[] | undefined
  {
    return this.dashboardData;
  }



}
