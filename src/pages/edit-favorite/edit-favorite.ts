import { Component } from '@angular/core';
import { NavController, NavParams,AlertController} from 'ionic-angular';
import { DataBankingProvider,accountAllbanking } from '../../providers/data-banking/data-banking';


/**
 * Generated class for the EditFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-favorite',
  templateUrl: 'edit-favorite.html',
})
export class EditFavoritePage {
type:string;
accountTransfer:accountAllbanking[]=[];
imgSrc:string;
billFavorite:any[]=[];
// banking:any[] = ['SCB','BAY','BBL','CIMB','GSB','KBANK','KK','KTB','LHBANK','SCBT','TBANK','TMB','TSCO','UOB'];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public provider:DataBankingProvider) {
      this.type=this.navParams.get('type');
      this.accountTransfer = this.provider.getFavoriteAccount();
      this.billFavorite = this.provider.getFavoriteBillPayment();
      // this.billFavorite=[{id:'1',billName:'TRIPLE T INTERNET CO.,LTD.(3BB)',alias:'3BB',nickname:'3BB'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditFavoritePage');
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
            this.provider.editFavoriteAccount(account);
            this.accountTransfer[this.accountTransfer.indexOf(account)].nickname=data.nickname;
            
          }
        }
      ]
    });

    prompt.present();
  }

  removeAccount(account){
    let confirm = this.alertCtrl.create({
      title: 'Comfirm to delete this transfer',
      message: 'This transfer will no longer be in the favorite list',
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
            this.provider.removeFavoriteAccount(account);
            console.log('Delete clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  setNicknameBill(bill){
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
            this.provider.editBillPayment(bill);
            this.billFavorite[this.billFavorite.indexOf(bill)].nickname=data.nickname;
          }
        }
      ]
    });

    prompt.present();
  }

  removeAccountBill(bill){
    let confirm = this.alertCtrl.create({
      title: 'Comfirm to delete this transfer',
      message: 'This transfer will no longer be in the favorite list',
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
            this.billFavorite.splice(this.billFavorite.indexOf(bill),1);
            this.provider.removeBillPayment(bill);
            console.log('Delete clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
