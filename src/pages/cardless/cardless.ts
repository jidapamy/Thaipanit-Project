import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ReviewPage } from '../review/review';

/**
 * Generated class for the CardlessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cardless',
  templateUrl: 'cardless.html',
})
export class CardlessPage {
  amount:any='';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardlessPage');
  }
  goBack(){
    this.navCtrl.pop();
    this.amount='';
  }
  review(){
    let modal = this.modalCtrl.create(ReviewPage,{page:'cardless',amount:this.amount});
    modal.present();
  }
  chooseAmount(amount:any){
    this.amount = amount;
  }

}
