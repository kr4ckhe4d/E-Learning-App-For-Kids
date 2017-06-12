import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimaryCoursePage } from './primary-course';

@NgModule({
  declarations: [
    PrimaryCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(PrimaryCoursePage),
  ],
  exports: [
    PrimaryCoursePage
  ]
})
export class PrimaryCoursePageModule {}
