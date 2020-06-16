import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { AsyncJavascriptComponent } from './async-javascript/async-javascript.component';
import { SharedModule } from '../_shared/shared.module';
import { ExampleOneComponent } from './async-javascript/example-one/example-one.component';
import { ExampleTwoComponent } from './async-javascript/example-two/example-two.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AsyncJavascriptComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

    ArticlesRoutingModule,
  ]
})
export class ArticlesModule { }
