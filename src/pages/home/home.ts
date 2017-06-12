import { ItemsProvider } from '../../providers/items/items';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products = [];
  constructor(public navCtrl: NavController, public itemsProvider: ItemsProvider) {
    this.getCartData();
  }

  getCartData(){
    this.products = this.itemsProvider.getCart();
  }
}
