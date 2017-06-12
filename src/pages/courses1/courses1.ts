import { DatabaseAccessProvider } from '../../providers/database-access/database-access';
import { CartPage } from '../cart/cart';
import { ItemPage } from '../item/item';
import { ItemsProvider } from '../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Courses1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-courses1',
  templateUrl: 'courses1.html',
})
export class Courses1Page {

products = [];
  cart = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsProvider:ItemsProvider,public dbAccess: DatabaseAccessProvider) {
    // this.products = itemsProvider.getItems();
    this.products = itemsProvider.getCourses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  viewItemDetails(product){
      	this.navCtrl.push(ItemPage,{
  		product : product
  	})
  }

  viewCart(){
    this.navCtrl.push(CartPage);
  }

}
