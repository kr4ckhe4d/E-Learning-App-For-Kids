import { DatabaseAccessProvider } from '../../providers/database-access/database-access';
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
                        "email": "",
                        "password": "",
                        "country": "",
                        "state": "",
                        "city": "",
                        "postal": "",
                        "address": "",
                      "category": ""}


  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController, public viewCtrl:ViewController,
  public loadingCtrl: LoadingController, private elementRef:ElementRef,
  private dbAccess: DatabaseAccessProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');

  }

  showRadio(){
    console.log('clicked');
    this.showCheckbox();
  }
  onCloseClicked() {
    this.viewCtrl.dismiss();
  }

  onSignUpClicked(){
    var usrdetails = [];
    this.dbAccess.registerUser(this.registerCredentials);
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Playschool Primary',
      value: 'playschool',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Secondary',
      value: 'secondary'
    });

    alert.addInput({
    type: 'checkbox',
    label: 'Tertiary',
    value: 'tertiary'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        if(data.length > 1){
this.invalidSelAlert();
        }else{
          this.registerCredentials.category = data[0];
        }
        console.log('Checkbox data:', data);
        console.log('this.registerCredentials:', this.registerCredentials);
      }
    });
    alert.present();
  }

invalidSelAlert(){
            let a = this.alertCtrl.create({
          title: 'Invalid Selection',
          subTitle: 'Select only one from the menu.',
          buttons: ['OK']
        });
        a.present();
}
presentAlert() {        
}

}
