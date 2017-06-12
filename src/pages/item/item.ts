import { ItemsProvider } from '../../providers/items/items';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SecondaryCoursePage } from "../secondary-course/secondary-course";
import { PrimaryCoursePage } from "../primary-course/primary-course";

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
product:any;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public navParams: NavParams, public loadingCtrl: LoadingController, public itemsProvider: ItemsProvider) {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  takeCourse(product){
    this.itemsProvider.cart.push(product);
    if(product.category == 'secondary'){
    this.navCtrl.push(SecondaryCoursePage,{
  		product : product
  	})
    }
    if(product.category == 'primary'){
    this.navCtrl.push(PrimaryCoursePage,{
  		product : product
  	})
    }

  }

  addToCart(product) {
  	this.itemsProvider.addToCart(product,((val) =>{
      if(val.status == 'fail'){
        this.presentAlert("Already Added", "The item is already in the cart.", "Okay");
      }else if(val.status == 'success'){
        this.presentAlert("Added Successfully", "The item was added Successfully.", "Okay");
      }
    }));
  }

  presentAlert(title,message,buttonType) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: message,
    buttons: [buttonType]
  });
  alert.present();
  }
}
