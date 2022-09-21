import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Clérison';
  age: number = 38;
  job = 'Developer';
  hobbies = ['bike', 'natação', 'kung fu'];
  car = {
    name: 'FIAT',
    year: 2010,
    color: 'branco'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
