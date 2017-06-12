import { DatabaseAccessProvider } from '../database-access/database-access';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsProvider {
    products = [{
      'src':'https://thumbs.dreamstime.com/z/letter-abc-17681931.jpg',
      'description': 'A simple activity to learn the Alphabet',
      'name': 'Alphabet Time!',
      'difficulty': 'easy',
      'category': 'primary',
      'id': '01'
  },{
      'src':'http://images.clipartpanda.com/red-apple-clipart-9iRa6xnie.png',
      'description': 'A simple activity to learn figures',
      'name': 'Read it Out!',
      'difficulty': 'medium',
      'category': 'primary',
      'id': '02'
  },{
      'src':'http://static.kidspot.com.au/cm_assets/16544/addition-jpg-20150902151254.jpg~q75,dx720y432u1r1gg,c--.jpg',
      'description': 'A simple activity to learn addition',
      'name': 'Add It Up!',
      'difficulty': 'medium',
      'category': 'secondary',
      'id': '03'
  },{
      'src':'http://mathskillbuilder.org/Img/mul.png',
      'description': 'A simple activity to learn multiplication',
      'name': 'Multiply!',
      'difficulty': 'high',
      'category': 'secondary',
      'id': '04'
  }];

  cart = [];

  getItems(){
    return this.products;
  }

  getCart(){
    return this.cart;
  }

  getCourses(){
    // var courses = this.products;
    // for(var i=0;i<courses.length;i++){
    //   if(courses[i].category !== this.dbAccess.currentUser.category){
    //     courses.splice(i,1);
    //   }
    // }
    return this.products;
  }

  addToCart(item,callback){
    console.log(this.cart);
    console.log(item);
    if(this.cart.length == 0){
      item.quantity = '1'; 
      this.cart.push(item);
      console.log('in len=0');
      callback({'status': 'success'});
      return;
    }else if(this.cart.length > 0){
      for(var i=0; i <this.cart.length; i++){
        console.log('bool' + (parseInt(this.cart[i].id) == parseInt(item.id)));
        if(parseInt(this.cart[i].id) == parseInt(item.id)){
          console.log('in id=id');
          callback({'status': 'fail'});
          return;
        }
      }
      item.quantity = '1';
      this.cart.push(item);
      console.log('in else');
      callback({'status': 'success'});
    }
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

  constructor(public dbAccess: DatabaseAccessProvider) {
    console.log('Hello ItemsProvider Provider');
  }

}
