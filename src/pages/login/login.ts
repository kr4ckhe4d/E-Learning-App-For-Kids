import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

import { Observable } from "rxjs/Observable";
import { SignUpPage } from "../sign-up-page/sign-up-page";


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  accessToken:any;

  loginInput={"email": "","password": ""};

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onCloseClicked() {
    this.viewCtrl.dismiss();
  }

    onSignupClicked(){
    this.navCtrl.push(SignUpPage);
  }

  onLoginClicked() {
}

}
