import { ItemsProvider } from '../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  products = [];
  constructor(public navCtrl: NavController, public itemsProvider: ItemsProvider) {
    this.getCartData();
  }

  getCartData(){
    this.products = this.itemsProvider.getCart();
  }

}
