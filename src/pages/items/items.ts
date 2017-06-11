import { ItemsProvider } from '../../providers/items/items';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsProvider:ItemsProvider) {
    this.products = itemsProvider.getItems();
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
