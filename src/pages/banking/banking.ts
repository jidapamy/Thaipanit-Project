import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardlessPage } from '../cardless/cardless';
import { BillPaymentPage } from '../bill-payment/bill-payment';
import { TransferPage } from '../transfer/transfer';
import { RequestMoneyPage } from '../request-money/request-money';

/**
 * Generated class for the BankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-banking',
  templateUrl: 'banking.html',
})
export class BankingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankingPage');
  }

  toRequestMoney(){
    this.navCtrl.push(RequestMoneyPage);
  }
  toCardlessATM(){
    this.navCtrl.push(CardlessPage);
  }
  toBillPaymentPage(){
    this.navCtrl.push(BillPaymentPage);
  }
  toTransferPage(){
    this.navCtrl.push(TransferPage);
  }

}
