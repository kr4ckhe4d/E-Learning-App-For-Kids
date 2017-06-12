import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondaryCoursePage } from './secondary-course';

@NgModule({
  declarations: [
    SecondaryCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(SecondaryCoursePage),
  ],
  exports: [
    SecondaryCoursePage
  ]
})
export class SecondaryCoursePageModule {}
