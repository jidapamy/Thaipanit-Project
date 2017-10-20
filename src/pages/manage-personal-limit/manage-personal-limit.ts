import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ManagePersonalLimitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-manage-personal-limit',
  templateUrl: 'manage-personal-limit.html',
})
export class ManagePersonalLimitPage {
  

  own:any = 10000000;
  otherSCB:any=100000;
  otherBank:any=200000;
  promptPay:any=200000;

  editOwn:boolean=false;
  editOtherSCB:boolean=false;
  editOtherBank:boolean=false;
  editPromptPay:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePersonalLimitPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

  editOwnMethod(){
    this.editOwn=true;
  }
  doneOwnMethod(){
    this.editOwn=false;
  }
 
  editOtherSCBMethod(){
    this.editOtherSCB=true;
  }
  doneOtherSCBMethod(){
    this.editOtherSCB=false;
  }

  editOtherBankMethod(){
    this.editOtherBank=true;
  }
  doneOtherBankMethod(){
    this.editOtherBank=false;
  }

  editPromptPayMethod(){
    this.editPromptPay=true;
  }
  donePromptPayMethod(){
    this.editPromptPay=false;
  }


}
