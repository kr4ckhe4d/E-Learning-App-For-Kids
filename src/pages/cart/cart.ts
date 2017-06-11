import { ItemsProvider } from '../../providers/items/items';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsProvider: ItemsProvider, public alertCtrl: AlertController) {
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
    if(product.quantity == 1){
      this.showConfirm(product);
    }else{
      this.itemsProvider.decreaseQuantity(product.id);
      this.getCartData();
      this.getCartTotal();
    }
  }

    showConfirm(product) {
    let confirm = this.alertCtrl.create({
      title: 'Remove item from cart?',
      message: 'Do you want to remove this item from cart?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            this.itemsProvider.removeFromCart(product.id);
            this.getCartData();
            this.getCartTotal();
          }
        }
      ]
    });
    confirm.present();
  }
}
