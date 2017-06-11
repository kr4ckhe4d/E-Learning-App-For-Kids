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
      'src':'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone-5s/iphone5s-gallery-img-2.jpg',
      'description': 'Patta phone eka',
      'name': 'iPhone 5S',
      'price_discount': '55.0',
      'price': '500',
      'id': '02'
  },{
      'src':'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/rosegold/iphone6s-rosegold-select-2015_AV2?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197977882',
      'description': 'Patta phone eka',
      'name': 'iPhone 6S',
      'price_discount': '55.0',
      'price': '500',
      'id': '03'
  },{
      'src':'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
      'description': 'Patta phone eka',
      'name': 'iPhone 7S',
      'price_discount': '55.0',
      'price': '500',
      'id': '04'
  },{
      'src':'https://boygeniusreport.files.wordpress.com/2016/11/iphone-8-concept.jpg?quality=98&strip=all',
      'description': 'Patta phone eka',
      'name': 'iPhone 8S',
      'price_discount': '55.0',
      'price': '500',
      'id': '05'
  }];

  cart = [];

  getItems(){
    return this.products;
  }

  getCart(){
    return this.cart;
  }

  addToCart(item){
    item.quantity = '1';
    this.cart.push(item);
  }

  getCartTotal(){
    var total = 0;
    for(var i=0; i <this.cart.length; i++){
      total = total + (parseInt(this.cart[i].quantity) * parseInt(this.cart[i].price)) - (parseInt(this.cart[i].quantity) * parseInt(this.cart[i].price_discount));
    }
    return total;
  }

  increaseQuantity(id){
    for(var i=0; i <this.cart.length; i++){
      if(this.cart[i].id == id){
        var qty = parseInt(this.cart[i].quantity);
        qty ++;
        this.cart[i].quantity = ''+qty;
        return;
      }
    }
  }

  decreaseQuantity(id){
    for(var i=0; i <this.cart.length; i++){
      if(this.cart[i].id == id){
        var qty = parseInt(this.cart[i].quantity);
        qty --;
        this.cart[i].quantity = ''+qty;
        return;
      }
    }
  }

  removeFromCart(id){
    for(var i=0; i <this.cart.length; i++){
      if(this.cart[i].id == id){
        this.cart.splice(i,1);
        return;
      }
    }
  }

  clearCart(){
    this.cart = [];
  }

  constructor() {
    console.log('Hello ItemsProvider Provider');
  }

}
