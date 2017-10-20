import { Component } from '@angular/core';
import { NavController, NavParams,ModalController} from 'ionic-angular';
import { DataBankingProvider,accountObject } from '../../providers/data-banking/data-banking';
import { AddAccountPage } from '../add-account/add-account';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  nowAccount:accountObject[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider:DataBankingProvider,
              public modalCtrl: ModalController
            ) {
      this.nowAccount = this.provider.getAccount();
      console.log(this.nowAccount[0].accountNumber);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  addAccount(){
    let modal = this.modalCtrl.create(AddAccountPage);
    modal.present();
  }

}
