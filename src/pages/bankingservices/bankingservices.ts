import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { ManagePersonalLimitPage } from '../manage-personal-limit/manage-personal-limit';
import { ScbPromptPayPage } from '../scb-prompt-pay/scb-prompt-pay';
import { RequestMoneyPage } from '../request-money/request-money';
import { TransferPage } from '../transfer/transfer';
import { BillPaymentPage } from '../bill-payment/bill-payment';
import { CardlessPage } from '../cardless/cardless';

/**
 * Generated class for the BankingservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bankingservices',
  templateUrl: 'bankingservices.html',
})
export class BankingservicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankingservicesPage');
  }

  goBack(){
    this.navCtrl.pop();
    console.log('back')
  }

  goToAccount(){
    this.navCtrl.push(AccountPage);
  }
  goToManagePersonalLimitPage(){
    this.navCtrl.push(ManagePersonalLimitPage);
  }
  goToScbPromptPayPage(){
    this.navCtrl.push(ScbPromptPayPage);
  }
  goToRequestMoneyPage(){
    this.navCtrl.push(RequestMoneyPage);
  }
  goToTransferPage(){
    this.navCtrl.push(TransferPage);
  }
  goToBillPaymentPage(){
    this.navCtrl.push(BillPaymentPage);
  }
  goToCardlessPage(){
    this.navCtrl.push(CardlessPage);
  }
  

}
