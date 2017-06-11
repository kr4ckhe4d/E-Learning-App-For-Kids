import { ItemPage } from '../pages/item/item';
import { ItemsPage } from '../pages/items/items';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemsProvider } from '../providers/items/items';
import { CartPage } from "../pages/cart/cart";
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/sign-up-page/sign-up-page";

@NgModule({
  declarations: [
    MyApp,
    ItemsPage,
    ContactPage,
    HomePage,
    ItemPage,
    CartPage,
    SignUpPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemsPage,
    ContactPage,
    HomePage,
    ItemPage,
    CartPage,
    LoginPage,
    SignUpPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsProvider
  ]
})
export class AppModule {}
