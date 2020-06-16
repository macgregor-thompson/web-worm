import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncJavascriptComponent } from './async-javascript/async-javascript.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'async-javascript', component: AsyncJavascriptComponent, data: {title: 'Async Javascript'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule {
}
