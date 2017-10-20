import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataBankingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataBankingProvider {
  newAccount:accountObject[]=[];//ที่จะ add เพิ่ม
  nowAccount:accountObject[]=[];//ที่โชว์
  otherAccount:accountObject[]=[];//ทั้งหมด
  favoriteAccount:accountAllbanking[]=[];
  billPayment:billPaymentBanking[]=[]; //บิลทั้งหมด
  favoriteBill:billPaymentBanking[]=[];
  allBanking:banking[]=[];
  comfirmReview:boolean;
  login:boolean;
  constructor(public http: Http) {
    console.log('Hello DataBankingProvider Provider');
    this.nowAccount=[{id:1,accountNumber:'xxx-xxx129-7',type:'Savings',nickname:'',moneyShow:'35,632.42',moneyCal:35632.42,banking:'SCB',accountName:'CAROL WELLMAN'}];
    this.otherAccount=[{id:1,accountNumber:'xxx-xxx129-7',type:'Savings',nickname:'',moneyShow:'35,632.42',moneyCal:35632.42,banking:'SCB',accountName:'CAROL WELLMAN'},
                     {id:2,accountNumber:'xxx-xxx023-8',type:'Savings',nickname:'',moneyShow:'641.13',moneyCal:641.13,banking:'SCB',accountName:'CAROL WELLMAN'},
                     {id:3,accountNumber:'xxx-xxx526-1',type:'Deposit',nickname:'',moneyShow:'4,000.00',moneyCal:4000.00,banking:'SCB',accountName:'CAROL WELLMAN'},
                     {id:4,accountNumber:'xxx-xxx313-9',type:'Savings',nickname:'',moneyShow:'1,200.13',moneyCal:1200.13,banking:'SCB',accountName:'CAROL WELLMAN'}
                    ];
    
    this.favoriteAccount=[{id:1,accountNumber:'012-582349-1',type:'Savings',nickname:'HOLLIE',banking:'SCB',amount:'500',accountName:'HOLLIE GOODROW'},
                          {id:2,accountNumber:'009-511432-9',type:'Savings',nickname:'DEBORAH',banking:'KTB',amount:'340',accountName:'DEBORAH STEVENS'},
                          {id:3,accountNumber:'153-983252-2',type:'Savings',nickname:'LORNA',banking:'KBANK',amount:'120',accountName:'LORNA TUNNELL'}
                          ];
    this.billPayment=[{id:1,billName:'CREDIT CARD CENTER',alias:'SCB',nickname:'',numberPay:'3948504930',ref1:'',ref2:''},
                      {id:2,billName:'CAR LOAN',alias:'SCB',nickname:'',numberPay:'1048393043',ref1:'',ref2:''},
                      {id:3,billName:'METROPOLITAN ELECTRIC',alias:'MEA',nickname:'',numberPay:'3405920493',ref1:'',ref2:''},
                      {id:4,billName:'REVENUE DEPARTMENT',alias:'RD',nickname:'',numberPay:'5948304910',ref1:'',ref2:''},
                      {id:5,billName:'AIS POSIPAID/AIS FIBER/AIRNET',alias:'AIS',nickname:'',numberPay:'4949403934',ref1:'',ref2:''},
                      {id:6,billName:'DTAC TRINET CO.,LTD',alias:'DTAC',nickname:'',numberPay:'3958583748',ref1:'',ref2:''},
                      {id:7,billName:'TRUE GROUP BILL/TRUEMOVE H/TRUE INTERNET',alias:'TRUE',nickname:'',numberPay:'1342456389',ref1:'',ref2:''},
                      {id:8,billName:'CITIBANK N.A.(VISA AND MASTER)',alias:'CITY',nickname:'',numberPay:'2456787654',ref1:'',ref2:''},
                      {id:9,billName:'KTC CREDIT CARD/PERSONAL LOAN',alias:'KTC',nickname:'',numberPay:'1584939495',ref1:'',ref2:''},
                      {id:10,billName:'UNITED OVERSEAS BANK (Card/Cash Plus)',alias:'UOB',nickname:'',numberPay:'2094839483',ref1:'',ref2:''},
                      {id:11,billName:'KRUNGSRIAYUDHYA CARD CO.,LTD.',alias:'BAY',nickname:'',numberPay:'3847592982',ref1:'',ref2:''},
                      {id:12,billName:'CENERAL CARD SERVICES 2',alias:'CENTRAL',nickname:'',numberPay:'1829384932',ref1:'',ref2:''},
                      {id:13,billName:'TRIPLE T INTERNET CO.,LTD.',alias:'3BB',nickname:'',numberPay:'3218928394',ref1:'',ref2:''},
                      {id:14,billName:'AIS 1-2-CALL!',alias:'AIS',nickname:'',numberPay:'15438893820',ref1:'',ref2:''},
                      {id:15,billName:'TUREMOVE H (Prepaid)',alias:'TRUE',nickname:'',numberPay:'2229304958',ref1:'',ref2:''}
                      ];
    this.favoriteBill=[{id:13,billName:'TRIPLE T INTERNET CO.,LTD.',alias:'3BB',nickname:'3BB',numberPay:'3218928394',ref1:'19284039283948',ref2:'349326105'},
                       {id:14,billName:'AIS 1-2-CALL!',alias:'AIS',nickname:'Phone AIS',numberPay:'15438893820',ref1:'37483729384738',ref2:'358193049'},];
    this.allBanking=[{id:1,banking:'SCB'},{id:2,banking:'BAY'},{id:3,banking:'BBL'},
                     {id:4,banking:'CIMB'},{id:5,banking:'GSB'},{id:6,banking:'KBANK'},
                     {id:7,banking:'KK'},{id:8,banking:'KTB'},{id:9,banking:'LHBANK'},
                     {id:10,banking:'SCBT'},{id:11,banking:'TBANK'},{id:12,banking:'TMB'},
                     {id:13,banking:'TSCO'},{id:14,banking:'UOB'}];
    
    }

  transfer(amount:any){
    console.log('amount:'+amount+' ----> Type:'+ typeof amount);
    this.nowAccount[0].moneyCal = this.nowAccount[0].moneyCal-amount;
    // this.nowAccount[0].moneyShow = (''+this.nowAccount[0].moneyCal).substr(-)+'.'+(''+this.nowAccount[0].moneyCal).substr(-2)
    console.log('เหลือ :'+this.nowAccount[0].moneyCal);
    console.log('show :'+(this.nowAccount[0].moneyCal+'').substr(0,2)+','+(this.nowAccount[0].moneyCal+'').slice(-6));
    this.nowAccount[0].moneyShow = (this.nowAccount[0].moneyCal+'').substr(0,2)+','+(this.nowAccount[0].moneyCal+'').slice(-6) ;
  }



  getFavoriteAccount(): accountAllbanking[] {
	    return this.favoriteAccount ;
  }
  editFavoriteAccount(account:accountAllbanking){
    this.favoriteAccount[this.favoriteAccount.indexOf(account)].nickname=account.nickname;
  }
  removeFavoriteAccount(account: accountAllbanking){
		let index = this.favoriteAccount.indexOf(account);
		if (index > -1){
			this.favoriteAccount.splice(index,1);
    }
  }
  addFavoriteAccount(account: accountAllbanking){
    this.favoriteAccount.push(account);
    // for(let i=0;i<this.favoriteAccount.length;i++){
    //   if(account===this.favoriteAccount[i]){
    //     break;
    //   }else{
    //     this.favoriteAccount.push(account);
    //   }
    // }
  }
  
  getAllBillPayment(): billPaymentBanking[] {
    return this.billPayment ;
}

  getFavoriteBillPayment(): billPaymentBanking[] {
	    return this.favoriteBill ;
  }
  editBillPayment(bill:billPaymentBanking){
    this.billPayment[this.favoriteBill.indexOf(bill)].nickname=bill.nickname;
  }
  removeBillPayment(bill: billPaymentBanking){
		let index = this.billPayment.indexOf(bill);
		if (index > -1){
			this.favoriteBill.splice(index,1);
    }
  }
  addBillPayment(bill: billPaymentBanking){
    this.favoriteBill.push(bill);
    // for(let i=0;i<this.favoriteBill.length;i++){
    //   console.log('['+i+'] addFavBill');
    //   if(bill===this.favoriteBill[i]){
    //     break;
    //   }else{
    //     this.favoriteBill.push(bill);
    //   }
    // }
  }


  addAccount(account:accountObject){
    this.nowAccount.push(account);
    this.newAccount.splice(this.newAccount.indexOf(account),1);
	}
  removeAccount(account: accountObject){
		let index = this.nowAccount.indexOf(account);
		if (index > -1){
			this.nowAccount.splice(index,1);
    }
    this.newAccount.push(account);
  }
	getAccount(): accountObject[] {
	    return this.nowAccount ;
  }
  getNewAccount():accountObject[]{
    console.log('getNewAccount');
    this.newAccount = this.otherAccount;
    console.log('length:'+this.newAccount.length)
    for(let i=0;i<this.newAccount.length;i++){
      console.log('i:'+i)
      if(this.nowAccount.length!=0){
        for(let j=0;j<this.nowAccount.length||j==0;j++){
          // console.log('newAccount['+i+']='+this.newAccount[i].id+'----nowAccount['+i+']='+this.nowAccount[j].id)
          if(this.newAccount[i].id===this.nowAccount[j].id){
            console.log('break');
            this.newAccount.splice(i,1);
            break;
          }
        }
      }
    }
    return this.newAccount ;
  }


  getAllBanking(): banking[] {
	    return this.allBanking ;
  }







}

export class accountObject{
  id:any;
  accountNumber:any;
  type:any;
  nickname:any;
  moneyShow:any;
  moneyCal:any;  
  banking:any;
  accountName:any;
}

export class accountAllbanking{
  id:any;
  accountNumber:any;
  type:any;
  nickname:any;
  banking:any;
  amount:any;
  accountName:any;
}
export class billPaymentBanking{
  id:any;
  billName:any;
  alias:any;
  nickname:any;
  numberPay:any;
  ref1:any;
  ref2:any;
}

export class banking{
  id:any;
  banking:any;
}
