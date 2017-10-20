import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScbPromptPayPage } from '../scb-prompt-pay/scb-prompt-pay';

/**
 * Generated class for the RequestMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-request-money',
  templateUrl: 'request-money.html',
})
export class RequestMoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestMoneyPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  goToSettingPromptpay(){
    this.navCtrl.push(ScbPromptPayPage);
  }

}
