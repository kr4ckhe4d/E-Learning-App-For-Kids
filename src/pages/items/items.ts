import { ItemPage } from '../item/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  products = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products.push({
      'src':'https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png',
      'description': 'Patta phone eka',
      'name': 'iPhone 4S',
      'price_discount': 55.0,
      'price': 500
  },{
      'src':'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682',
      'description': 'Patta phone eka',
      'name': 'iPhone 4S',
      'price_discount': 55.0,
      'price': 500
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  viewItemDetails(product){
      	this.navCtrl.push(ItemPage,{
  		product : product
  	})
  }

}
