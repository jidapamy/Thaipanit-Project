import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { EditFavoritePage } from '../edit-favorite/edit-favorite';
import { ManageAccountPage } from '../manage-account/manage-account';
import { ManagePersonalLimitPage } from '../manage-personal-limit/manage-personal-limit';
import { ScbPromptPayPage } from '../scb-prompt-pay/scb-prompt-pay';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  email = 'CAROLMAN@RHYTA.COM';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
  editEmail(){
    let prompt = this.alertCtrl.create({
      title: 'Edit Email',
      message: "Please provide a new email.",
      inputs: [
        {
          name: 'email',
          value: this.email
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
            console.log('Saved clicked');
            this.email = data.email;
            console.log('Data '+data.email);
            
          }
        }
      ]
    });

    prompt.present();
  }

  goToManageAccounts(){
    this.navCtrl.push(ManageAccountPage);
  }
  
  goToManageSCBPromptPay(){
    this.navCtrl.push(ScbPromptPayPage);
  }

  goToManagePersonalLimit(){
    this.navCtrl.push(ManagePersonalLimitPage);
  }

  goToManageFavorite(type:string){
    this.navCtrl.push(EditFavoritePage,{type:type});
  }
}
