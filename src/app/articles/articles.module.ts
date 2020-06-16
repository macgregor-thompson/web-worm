import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { AsyncJavascriptComponent } from './async-javascript/async-javascript.component';
import { SharedModule } from '../_shared/shared.module';
import { ExampleOneComponent } from './async-javascript/example-one/example-one.component';
import { ExampleTwoComponent } from './async-javascript/example-two/example-two.component';
import { RouterModule } from '@angular/router';
import { ExampleThreeComponent } from './async-javascript/example-three/example-three.component';
import { ExampleFourComponent } from './async-javascript/example-four/example-four.component';
import { ExampleFiveComponent } from './async-javascript/example-five/example-five.component';
import { ExampleSixComponent } from './async-javascript/example-six/example-six.component';

@NgModule({
  declarations: [
    AsyncJavascriptComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ExampleFourComponent,
    ExampleFiveComponent,
    ExampleSixComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

    ArticlesRoutingModule,
  ]
})
export class ArticlesModule { }
