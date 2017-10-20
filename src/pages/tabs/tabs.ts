import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { BankingPage } from '../banking/banking';
import { NotificationPage } from '../notification/notification';
import { OthersMenuPage } from '../others-menu/others-menu';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccountPage;
  tab3Root = BankingPage;
  tab4Root = NotificationPage;
  tab5Root = OthersMenuPage;
  

  constructor() {

  }
}
