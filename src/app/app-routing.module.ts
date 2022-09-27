import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'change-number', component: ChangeNumberComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
