import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  values: string[] = ['Value 1', 'Value 2', 'Value 3']; // Replace with your actual data
}
