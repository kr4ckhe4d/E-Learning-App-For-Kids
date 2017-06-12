import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Courses1Page } from './courses1';

@NgModule({
  declarations: [
    Courses1Page,
  ],
  imports: [
    IonicPageModule.forChild(Courses1Page),
  ],
  exports: [
    Courses1Page
  ]
})
export class Courses1PageModule {}
