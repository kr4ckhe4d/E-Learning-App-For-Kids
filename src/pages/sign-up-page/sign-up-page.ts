import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';

import { Observable } from "rxjs/Observable";
import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "../login/login";

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up-page',
  templateUrl: 'sign-up-page.html',
})
export class SignUpPage {
  fieldTypes:any;
  registerCredentials = {"fname": "",
                        "lname": "",
                        "email": "",
                        "password": "",
                        "dob": "",
                        "street_address": "",
                        "country": "",
                        "city": "",
                        "postal": "",
                        "contact_no": ""}


  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController, 
  public viewCtrl:ViewController,public loadingCtrl: LoadingController, private elementRef:ElementRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');

  }
  onCloseClicked() {
    this.viewCtrl.dismiss();
  }

  onSignUpClicked(){}

presentAlert() {        
}

}
