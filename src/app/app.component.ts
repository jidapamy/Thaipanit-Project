import { Component,ViewChild } from '@angular/core';
import { Platform ,ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { EditFavoritePage } from '../pages/edit-favorite/edit-favorite';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationPage } from '../pages/notification/notification';
import { ReviewPage } from '../pages/review/review';
import { BillPaymentPage } from '../pages/bill-payment/bill-payment';
import { TransferPage } from '../pages/transfer/transfer';
import { AccountPage } from '../pages/account/account';
import { CardlessPage } from '../pages/cardless/cardless';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = CardlessPage;
  rootPage:any = TabsPage;
  @ViewChild('myNav')nav;
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngAfterViewInit(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
