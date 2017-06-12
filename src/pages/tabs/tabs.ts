import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Courses1Page } from "../courses1/courses1";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Courses1Page;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
