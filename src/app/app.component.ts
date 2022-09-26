import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Clerison Oliveira';

  userData = {
    email: 'clerison@email.com',
    role: 'Administrador',
  }
  title = 'cursoAngularProjetoMomentos';
}
