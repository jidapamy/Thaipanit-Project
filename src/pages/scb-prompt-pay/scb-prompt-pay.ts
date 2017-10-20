import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ScbPromptPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scb-prompt-pay',
  templateUrl: 'scb-prompt-pay.html',
})
export class ScbPromptPayPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScbPromptPayPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  choose(){
    let prompt = this.alertCtrl.create({
      title: 'Comfirm to choose this promptpay',
      message: "You will no change this promptpay in SCB Easy app",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            console.log('Confirm clicked');
          }
        }
      ]
    });

    prompt.present();
  }

  choosePhone(){

  }
}
