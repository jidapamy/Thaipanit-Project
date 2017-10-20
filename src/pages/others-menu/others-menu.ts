import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';
import { ScbPromptPayPage } from '../scb-prompt-pay/scb-prompt-pay';

/**
 * Generated class for the OthersMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-others-menu',
  templateUrl: 'others-menu.html',
})
export class OthersMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersMenuPage');
  }
  
  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  logOut(){
    this.navCtrl.push(HomePage);
  }
  goToPromptPay(){
    this.navCtrl.push(ScbPromptPayPage)
  }


}
