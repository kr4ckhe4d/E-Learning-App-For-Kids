import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
product:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  addToCart(product) {
  	
  	// let loading = this.loadingCtrl.create({
	  //   content: 'Adding to cart...'
	  // });
  	// loading.present();

    // let line_item:any = {};

    // line_item.product_id = this.product.id;
    // line_item.quantity = 1;

    // if (this.product.type === 'product_with_variants'){
    //   line_item.options = this.selectedVariants;
    // }

    // this.marketcloud.client.carts.add(this.configuration.get('cart_id'),[
    //     line_item
    // ])
  	// .then((response) => {
    //   loading.dismiss();
    //   let alert = this.alertCtrl.create({
    //       title: 'Added to cart!',
    //       subTitle: 'Item added to cart',
    //       buttons: ['Ok']
    //     });

    //     alert.present();

    // })
    // .catch((error) => {
    //   loading.dismiss();
    //   let alert = this.alertCtrl.create({
    //       title: 'Error',
    //       subTitle: 'An error has occurred, please retry.',
    //       buttons: ['Ok']
    //     });
    //     alert.present();

    // })
  }
}
