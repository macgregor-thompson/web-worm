import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';
import { AsyncJavascriptComponent } from './async-javascript/async-javascript.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { ExampleOneComponent } from './async-javascript/example-one/example-one.component';
import { ExampleTwoComponent } from './async-javascript/example-two/example-two.component';


@NgModule({
  declarations: [
    JavascriptComponent,
    AsyncJavascriptComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
