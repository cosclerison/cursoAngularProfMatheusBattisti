import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animal: Animal[] = [
    {name: 'Maggie', type: 'Dog', age: 7, color: 'Marrom'},
    {name: 'Tiger', type: 'Tartaruga', age: 8, color: 'Casco'},
    {name: 'Lips', type: 'Peixe', age: 1, color: 'Cinza'},
    {name: 'Melina', type: 'Dog', age: 7, color: 'Marrom Claro'},
    {name: 'Ig', type: 'Dog', age: 7, color: 'Branco'},
    {name: 'Nami', type: 'Dog', age: 7, color: 'Marrom Escuro'},
    {name: 'Shakira', type: 'Dog', age: 7, color: 'Chocolate'},
    {name: 'Eros', type: 'Dog', age: 7, color: 'Bege claro'},
    {name: 'July', type: 'Dog', age: 7, color: 'Bege claro'},
  ];

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} de idade e sua cor é ${animal.color}`;
  }

}
