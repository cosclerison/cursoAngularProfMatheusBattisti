import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = []; 

  animalDetails = '';

  constructor(
    private listService: ListService,
  ) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} de idade e sua cor é ${animal.color}`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);  
    this.listService.remove(animal.id).subscribe(); 
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
