import { ItemsPage } from '../items/items';
import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ItemsPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
