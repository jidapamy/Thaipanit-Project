import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,ItemSliding } from 'ionic-angular';
import { DataBankingProvider,accountObject } from '../../providers/data-banking/data-banking';

/**
 * Generated class for the AddAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {
newAccount:accountObject[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public provider:DataBankingProvider) {
      this.newAccount=this.provider.getNewAccount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAccountPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

  addAccount(slidingItem: ItemSliding, account: accountObject){
    this.provider.addAccount(account)
    
    slidingItem.close();

  }

}
