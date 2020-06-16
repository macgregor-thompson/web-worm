import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../_shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    TopNavbarComponent,
    HomeComponent,
    AboutComponent,
  ],
  exports: [
    TopNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
