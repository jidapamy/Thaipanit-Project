import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController} from 'ionic-angular';
import { DataBankingProvider,banking ,accountObject,accountAllbanking} from '../../providers/data-banking/data-banking';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  amountPush:number=0;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public provider:DataBankingProvider) {
      this.provider.login=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushNumber(number:number){
    this.amountPush++;
    if(this.amountPush==6){
      setTimeout(()=>{this.viewCtrl.dismiss();},400);

    }
    console.log('push : '+number);
    
  }

  removeNumber(){
    this.amountPush--;
  }

  goToHome(){
    this.viewCtrl.dismiss();
  }
}
