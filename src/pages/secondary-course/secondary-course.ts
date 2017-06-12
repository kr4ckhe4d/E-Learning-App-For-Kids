import { HomePage } from '../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the SecondaryCoursePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-secondary-course',
  templateUrl: 'secondary-course.html',
})
export class SecondaryCoursePage {
  @ViewChild(Slides) slides: Slides;
  answer:String;
  score = 0;
product:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.product = this.navParams.get('product');

  }

  finish(){
    this.product.points = this.score + '/' + this.product.problems.length;
    this.navCtrl.setRoot(HomePage,{
  		product : this.product
  	});
  }

  nextSlide(problem){
    if(problem.answer == this.answer){
      this.score ++;
    }
    this.slides.slideNext();
    this.answer = "";

  }
    goToSlide() {
    this.slides.slideTo(2, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondaryCoursePage');
  }

}
