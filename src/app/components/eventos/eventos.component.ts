import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show; //toggle
    
    /* Eventro toggle, inverte o valor 
     sem a necessidade recursos 
     auxiliares para esta função
     - evento antigo do javascript */
  }

}
