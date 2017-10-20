import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
import { DataBankingProvider,banking ,accountObject,accountAllbanking} from '../../providers/data-banking/data-banking';
import { ReviewPage } from '../review/review';
import { Content } from 'ionic-angular';
/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  favAccount:accountAllbanking[]=[];
  @ViewChild(Content) content: Content;
  segment:string='others';
  allBanking:banking[]=[];
  chooseBanking:any;
  selectBanking:boolean=this.provider.comfirmReview;
  nowAccount:accountObject[]=[];
  chooseFav:boolean;

  

  amount:any;
  accountNumber:any;
  note:any;

  dataAccountTransfer:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider:DataBankingProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
    this.favAccount=this.provider.getFavoriteAccount();
    this.allBanking=this.provider.getAllBanking();
    this.nowAccount=this.provider.getAccount();  
    console.log(this.nowAccount.length);    
    console.log('nowAccount.accountNumber='+this.nowAccount[0].accountNumber);
    // this.selectBanking = this.provider.comfirmReview;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

  chooseInAll(index){
    this.chooseBanking=this.allBanking[index]; 
    this.selectBanking=true; 
    this.content.scrollToTop(300);
    this.amount=undefined;
    // this.accountNumber=undefined;
  }

  chooseInFav(index){
    this.chooseBanking=this.favAccount[index]; 
    console.log('id'+this.chooseBanking.id);
    this.selectBanking=true; 
    this.content.scrollToTop(300);
    console.log(this.chooseBanking.banking);
    this.chooseFav=true;
    this.amount = this.favAccount[index].amount;
    this.accountNumber = this.favAccount[index].accountNumber;
  }
  close(){
    console.log(this.provider.comfirmReview)
    this.selectBanking=false; 
    this.chooseBanking='';
    this.content.scrollToTop(300);
    this.chooseFav=false;
    this.accountNumber=undefined;
    this.amount =undefined;
  }

  chooseOwn(index){
    this.chooseBanking=this.nowAccount[index]; 
    console.log('id'+this.chooseBanking.id);
    this.selectBanking=true; 
    this.content.scrollToTop(300);
    console.log(this.chooseBanking.banking);
    this.chooseFav=true;
    // this.amount = this.nowAccount[index].amount;
    this.accountNumber = this.nowAccount[index].accountNumber;
  }

  review(chooseBanking){
    let accountNumString:string;
    console.log('id'+chooseBanking.id);
    this.dataAccountTransfer ='';
    if(this.amount===undefined || this.accountNumber===undefined){
      let alert = this.alertCtrl.create({
        title: 'Invalid!',
        subTitle: 'Incomplete information. Please try again.'
      });
      alert.present().then(()=>{
        setTimeout(() => {alert.dismiss()}, 1000);
      }).catch(()=>{
        alert.dismiss();
      });
    }else{
      console.log(this.amount);
      if(this.amount<=this.nowAccount[0].moneyCal){
        console.log(this.amount+'<money');
          if(this.chooseFav){
            console.log('chooseFav');
            this.dataAccountTransfer ={id:chooseBanking.id,accountNumber:chooseBanking.accountNumber,type:chooseBanking.type,nickname:chooseBanking.nickname,banking:chooseBanking.banking,amount:this.amount,page:'banking',note:this.note,accountName:chooseBanking.accountName};      
            let modal = this.modalCtrl.create(ReviewPage,this.dataAccountTransfer);
            modal.present();
            this.close();
          }else{
            if((this.accountNumber+'').length<=10){
              while((this.accountNumber+'').length<10){
                this.accountNumber='0'+this.accountNumber;
              }
              accountNumString = (''+this.accountNumber).substring(0,3)+'-'+(''+this.accountNumber).substring(3,9)+'-'+(''+this.accountNumber).substring(9,10);
              console.log('review:'+accountNumString)
              this.dataAccountTransfer ={id:chooseBanking.id,accountNumber:accountNumString,type:'Saving',nickname:'',banking:chooseBanking.banking,amount:this.amount,page:'banking',note:this.note,accountName:''};      
              console.log('this.dataAccountTransfer:'+this.dataAccountTransfer.accountNumber)
              let modal = this.modalCtrl.create(ReviewPage,this.dataAccountTransfer);
              modal.present();
              this.close();

            }else if((this.accountNumber+'').length>10){
              console.log((this.accountNumber+'').length+'>10')
              let alert = this.alertCtrl.create({
                title: 'Invalid!',
                subTitle: 'Information not available. Please try again later.'
              });
              alert.present().then(()=>{
                setTimeout(() => {alert.dismiss()}, 1000);
              }).catch(()=>{
                alert.dismiss();
              });
            }
          }
      }else{
        let alert = this.alertCtrl.create({
            title: 'Invalid!',
            subTitle: 'Insufficient balance, please select another account.'
         });
          alert.present().then(()=>{
            setTimeout(() => {alert.dismiss()}, 1000);
          }).catch(()=>{
            alert.dismiss();
          });
      }
      
    }
  }


}
