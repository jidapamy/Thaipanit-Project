import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,ViewController} from 'ionic-angular';
import { DataBankingProvider,billPaymentBanking } from '../../providers/data-banking/data-banking';
import { AccountPage } from '../account/account';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
  toAccount:any;
  page:any;
  nickname:any='';
  transferTime: Date = new Date();
  fee:number;
  balance:number;
  amountShow:any;
  verified:boolean;
  verifiedNum:string='xxx-xxx-9331';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public provider:DataBankingProvider,
              public viewCtrl: ViewController
            ) {
      this.toAccount = this.navParams.data;
      // console.log('amount'+this.toAccount.amount);
      // console.log('img/'+this.toAccount.page+'/'+this.toAccount.alias+'.jpg')
      // console.log('img/'+this.toAccount.page+'/'+this.toAccount.banking+'.jpg')
      this.page = this.toAccount.page;
      this.nickname=this.toAccount.nickname;
      console.log('nickname'+this.toAccount.nickname);
      // console.log('number '+this.toAccount.accountNumber);
      // console.log('Time'+this.transferTime.toString().substring(8,10)+ '/'+ this.transferTime.toString().substring(4,7)+ '/'+ this.transferTime.toString().substring(11,15) +' - '+ this.transferTime.toString().substring(16,21));
      console.log('Name:'+this.toAccount.accountName);
      if(this.toAccount.page=='banking' && this.toAccount.banking == 'SCB' ){
        this.fee = 0;
      }else if(this.toAccount.page=='banking' && this.toAccount.banking != 'SCB'){
        this.fee = 25;
      }else if(this.toAccount.page=='bill'){
        this.fee = 20;
      }

      console.log('lastIndexOf=='+(this.toAccount.amount+'').lastIndexOf('.'));

      // if(this.toAccount.page!=='cardless'){
        if((this.toAccount.amount+'').lastIndexOf('.')==-1){
          console.log('Not . AMOUNT:::'+this.toAccount.amount);
          this.amountShow = this.toAccount.amount+'.00';
        }else{
          console.log('AMOUNT:::'+this.toAccount.amount);
          this.amountShow = this.toAccount.amount;
        }
      // }

      this.balance = this.provider.nowAccount[0].moneyCal;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  addFavorite(toAccount){
    let prompt = this.alertCtrl.create({
      title: 'Add to favorite',
      inputs: [
        {
          name: 'nickname',
          placeholder: 'Enter a nickname'
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
          text: 'Done',
          handler: data => {
            this.nickname = data.nickname;
            if(this.page==='banking'){
              this.provider.addFavoriteAccount({id:toAccount.id,accountNumber:toAccount.accountNumber,type:'Savings',nickname:data.nickname,banking:toAccount.banking,amount:toAccount.amount,accountName:'Richard Langer'});
              // this.nickname = data.nickname;
              console.log('banking: '+this.nickname);
            }else{
              this.provider.addBillPayment({id:toAccount.id,billName:toAccount.billName,alias:toAccount.alias,nickname:data.nickname,numberPay:toAccount.numberPay,ref1:toAccount.ref1,ref2:toAccount.ref2});              
            }
          }
        }
      ]
    });

    prompt.present();
  }

  confirm(){
       if(this.toAccount.page!='cardless'){
         
      let total = (+this.toAccount.amount)+this.fee
      let balance = this.balance-total
      this.provider.comfirmReview = false;
      let alert = this.alertCtrl.create({
        title: 'Successfull transfer',
        // subTitle: this.transferTime.toString().substring(8,10)+ ' '+ this.transferTime.toString().substring(4,7)+ ' '+ this.transferTime.toString().substring(11,15) +' - '+ this.transferTime.toString().substring(16,21)
        subTitle: 'Your remaining balance after this transaction will be "'+balance+'" '

      });

     
        let toAccountName;
        if(this.toAccount.page=='bill'){
          toAccountName = this.toAccount.billName;
        }else{
          toAccountName =this.toAccount.accountName;
        }
        
        let confirm = this.alertCtrl.create({
          title: 'Comfirm to transfer',
          message: 'You will transfer money to '+ toAccountName +' '+this.toAccount.amount+' baht. Fee is '+this.fee+' Baht. Total is '+total,
          buttons: [
            {
              text: 'Cancel',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Comfirm',
              handler: () => {
                this.provider.transfer(total);
                console.log('Comfirm clicked');
                setTimeout(() =>{
                  alert.present().then(()=>{
                  setTimeout(() => {alert.dismiss()}, 1600);
                    setTimeout(() => {
                      this.viewCtrl.dismiss();
                      // this.viewCtrl.enableBack();
                      // this.navCtrl.push(AccountPage);
                    }, 2000);
                  }).catch(()=>{
                      alert.dismiss();
                  });
                },300);
              }
            }
          ]
        });
        confirm.present();
      }else{
        let alert = this.alertCtrl.create({
          title: 'Successfull Cardless ATM request',
          // subTitle: this.transferTime.toString().substring(8,10)+ ' '+ this.transferTime.toString().substring(4,7)+ ' '+ this.transferTime.toString().substring(11,15) +' - '+ this.transferTime.toString().substring(16,21)
          subTitle: '(WITHDRAW CODE: 843582)',
          message:'Use the withdraw Code and your mobile no. to withdraw from any SCB ATM within 15 mins.',
          buttons:[{
            text: 'Cancel',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Comfirm',
            handler: () => {
              setTimeout(() =>{
                this.viewCtrl.dismiss();
              },300);
            }
          }]
        });


        let confirm = this.alertCtrl.create({
          title: 'Comfirm to withdraw',
          message: 'You will withdraw money from xxx-xxx129-7 '+this.toAccount.amount+' baht.',
          buttons: [
            {
              text: 'Cancel',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Comfirm',
              handler: () => {
                console.log('Comfirm clicked');
                setTimeout(() =>{
                  alert.present();
                },300);
              }
            }
          ]
        });
        confirm.present();
      }


  }

  selectVerified(){
    this.verified=true;
    console.log(this.verified)
  }
  chooseVerified(){
    this.verified=false;
  }

}
