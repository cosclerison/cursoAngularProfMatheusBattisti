import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
// name escrito errado, tem que ser key sensitive, o correto é Clerison, assim aparecerá o template 'ng-template'
  name = 'clerison';

  constructor() { }

  ngOnInit(): void {
  }

}
