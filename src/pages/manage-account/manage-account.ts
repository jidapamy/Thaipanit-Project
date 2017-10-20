import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ModalController} from 'ionic-angular';
import { AddAccountPage } from '../add-account/add-account';
import { DataBankingProvider,accountObject } from '../../providers/data-banking/data-banking';
/**
 * Generated class for the ManageAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-manage-account',
  templateUrl: 'manage-account.html',
})
export class ManageAccountPage {
  // nickname:any='';
  userAccount:accountObject[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public provider:DataBankingProvider ) {
      this.userAccount = this.provider.getAccount();   
      console.log()     
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageAccountPage');
  }
  
  goBack(){
    this.navCtrl.pop();
  }

  setNickname(account){
    let prompt = this.alertCtrl.create({
      title: 'Set a Nickname',
      message: "Please provide a new nickname.",
      inputs: [
        {
          name: 'nickname',
          placeholder: 'Enter nickname account'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.userAccount[this.userAccount.indexOf(account)].nickname=data.nickname;
            
          }
        }
      ]
    });

    prompt.present();
  }

  removeAccount(account){
    let confirm = this.alertCtrl.create({
      title: 'Comfirm to delete this account',
      message: 'You will no longer be able to see this account in SCB Easy app',
      buttons: [
        {
          text: 'No,keep it',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes, delete',
          handler: () => {
            this.provider.removeAccount(account);
            // this.userAccount.splice(this.userAccount.indexOf(account),1);
            console.log('Delete clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  addAccount(){
    let modal = this.modalCtrl.create(AddAccountPage);
    modal.present();
  }

  
}
