import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatChipsModule, MatToolbarModule, MatTabsModule
  ],
  exports: [
    MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatChipsModule, MatToolbarModule, MatTabsModule
  ]
})
export class AngularMaterialModule {}
