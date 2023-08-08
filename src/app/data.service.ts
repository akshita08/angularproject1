
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  values: string[] = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];

  constructor() { }
}
