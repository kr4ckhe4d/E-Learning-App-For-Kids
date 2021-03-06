import { ItemPage } from '../pages/item/item';
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
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/sign-up-page/sign-up-page";
import { DatabaseAccessProvider } from '../providers/database-access/database-access';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { Courses1Page } from "../pages/courses1/courses1";
import { SecondaryCoursePage } from "../pages/secondary-course/secondary-course";
import { PrimaryCoursePage } from "../pages/primary-course/primary-course";
import { ProfilePage } from "../pages/profile/profile";

ProfilePage
@NgModule({
  declarations: [
    MyApp,
    Courses1Page,
    ContactPage,
    HomePage,
    ItemPage,
    SignUpPage,
    LoginPage,
    SecondaryCoursePage,
    PrimaryCoursePage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Courses1Page,
    ContactPage,
    HomePage,
    ItemPage,
    LoginPage,
    SignUpPage,
    SecondaryCoursePage,
    PrimaryCoursePage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsProvider,
    DatabaseAccessProvider
  ]
})
export class AppModule {}
