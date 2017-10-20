import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
import { DataBankingProvider,billPaymentBanking } from '../../providers/data-banking/data-banking';
import { ReviewPage } from '../review/review';
import { Content } from 'ionic-angular';



/**
 * Generated class for the BillPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bill-payment',
  templateUrl: 'bill-payment.html',
})
export class BillPaymentPage {
  banking:billPaymentBanking[] =[];
  bankingFilter:billPaymentBanking[] =[];
  isfiltered:boolean;
  segment:string='newPayment';
  selectBill:boolean;
  chooseBill:any;
  notFound:boolean;
  favBill:billPaymentBanking[]=[];
  chooseFav:boolean;
  nickname:any;
  nowAccount:any;

  amount:string;
  ref1:string;
  ref2:string;

  dataBillPayment:any;
  @ViewChild(Content) content: Content;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider:DataBankingProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
      this.banking=this.provider.getAllBillPayment();
      this.chooseBill=this.banking[0]; 
      this.favBill=this.provider.getFavoriteBillPayment();
      this.nowAccount=this.provider.getAccount();  
      
      console.log(this.favBill[0].alias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillPaymentPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

  searchBill(event){
    this.notFound = false;
    if (event.target.value){
      if (event.target.value.length>1){
        let filteredJson = this.banking.filter( row => { 
              if ((row.billName.indexOf(event.target.value) != -1) || (row.alias.indexOf(event.target.value)!= -1)) {
                return true;
            } else {
                return false ;
              }
        });
        this.isfiltered = true ;
        this.bankingFilter = filteredJson ;
      } else {
        this.isfiltered = false ;
      }
    } else {
      this.isfiltered = false ;
    }

    if(this.bankingFilter.length<=0){
        this.notFound = true;
    }
  }

  chooseFilter(index){
    this.chooseBill=this.bankingFilter[index];
    this.selectBill=true; 
    this.content.scrollToTop(300);
    this.ref1=''
    this.ref2='';
  }
  chooseInAll(index){
    this.chooseBill=this.banking[index]; 
    this.selectBill=true; 
    this.content.scrollToTop(300);
    this.ref1=''
    this.ref2='';
  }
  chooseInFav(index){
    this.chooseBill=this.favBill[index]; 
    console.log('choose:'+this.favBill[index]);
    this.selectBill=true; 
    this.content.scrollToTop(300);
    this.chooseFav=true;
    this.ref1=this.favBill[index].ref1;
    this.ref2=this.favBill[index].ref2;
    this.nickname=this.favBill[index].nickname;
  }
  close(){
    this.selectBill=false; 
    this.chooseBill='';
    this.content.scrollToTop(300);
    this.chooseFav=false;
    this.ref1='';
    this.ref2='';
    this.amount='';

  }

  review(chooseBill){
    this.dataBillPayment ='';
    if(this.amount===undefined ||this.ref1===undefined || this.ref2===undefined){
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
      console.log('nickname===='+this.chooseBill.nickname)
      if(this.amount<=this.nowAccount[0].moneyCal){
        console.log(this.amount+'<money');
          if(this.chooseFav){
            console.log('chooseFav');
            this.dataBillPayment ={id:chooseBill.id,billName:chooseBill.billName,alias:chooseBill.alias,numberPay:chooseBill.numberPay,amount:this.amount,page:'bill',ref1:this.ref1,ref2:this.ref2,nickname:this.chooseBill.nickname};    
            let modal = this.modalCtrl.create(ReviewPage,this.dataBillPayment);
            modal.present();
            this.close();
          }else{
            if((this.ref1+'').length<=14){
              while((this.ref1+'').length<14){
                this.ref1='0'+this.ref1;
              }
              this.dataBillPayment ={id:chooseBill.id,billName:chooseBill.billName,alias:chooseBill.alias,numberPay:chooseBill.numberPay,amount:this.amount,page:'bill',ref1:this.ref1,ref2:this.ref2,nickname:this.chooseBill.nickname};    
              // console.log('this.dataAccountTransfer:'+this.dataBillPayment.accountNumber)
              let modal = this.modalCtrl.create(ReviewPage,this.dataBillPayment);
              modal.present();
              this.close();

            }else if((this.ref1+'').length>14){
              // console.log((this.accountNumber+'').length+'>10')
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
