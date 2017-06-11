import { ItemsProvider } from '../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cart = [];
  cartTotal = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsProvider: ItemsProvider) {
    this.getCartData();
    this.getCartTotal();
  }

  getCartTotal(){
    this.cartTotal = this.itemsProvider.getCartTotal();
  }

  getCartData(){
    this.cart = this.itemsProvider.getCart();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  increaseQuantity(product){
    this.itemsProvider.increaseQuantity(product.id);
    this.getCartData();
    this.getCartTotal();
  }

  decreaseQuantity(product){
    this.itemsProvider.decreaseQuantity(product.id);
    this.getCartData();
    this.getCartTotal();
  }
}
