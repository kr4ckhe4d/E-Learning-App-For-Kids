import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsProvider {
    products = [{
      'src':'https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png',
      'description': 'Patta phone eka',
      'name': 'iPhone 4S',
      'price_discount': '55.0',
      'price': '500',
      'id': '01'
  },{
      'src':'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682',
      'description': 'Patta phone eka',
      'name': 'iPhone 4S',
      'price_discount': '55.0',
      'price': '500',
      'id': '02'
  }];

  cart = [{
      'src':'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682',
      'description': 'Patta phone eka',
      'name': 'iPhone 4S',
      'price_discount': '55.0',
      'price': '500',
      'id': '02'
  }];

  getItems(){
    return this.products;
  }

  getCart(){
    return this.cart;
  }

  addToCart(item){
    this.cart.push(item);
  }

  clearCart(){
    this.cart = [];
  }

  constructor() {
    console.log('Hello ItemsProvider Provider');
  }

}
