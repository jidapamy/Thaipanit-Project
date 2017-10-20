import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http' ;
import { FormsModule } from '@angular/forms';

import { ReviewPage } from '../pages/review/review';
import { RequestMoneyPage } from '../pages/request-money/request-money';
import { AddAccountPage } from '../pages/add-account/add-account';
import { EditFavoritePage } from '../pages/edit-favorite/edit-favorite';
import { ManageAccountPage } from '../pages/manage-account/manage-account';
import { ManagePersonalLimitPage } from '../pages/manage-personal-limit/manage-personal-limit';
import { ScbPromptPayPage } from '../pages/scb-prompt-pay/scb-prompt-pay';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { BankingPage } from '../pages/banking/banking';
import { NotificationPage } from '../pages/notification/notification';
import { OthersMenuPage } from '../pages/others-menu/others-menu';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BillPaymentPage } from '../pages/bill-payment/bill-payment';
import { CardlessPage } from '../pages/cardless/cardless';
import { TransferPage } from '../pages/transfer/transfer';
import { BankingservicesPage } from '../pages/bankingservices/bankingservices';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataBankingProvider } from '../providers/data-banking/data-banking';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AccountPage,
    BankingPage,
    NotificationPage,
    OthersMenuPage,
    SettingsPage,
    EditFavoritePage,
    ManageAccountPage,
    ManagePersonalLimitPage,
    ScbPromptPayPage,
    AddAccountPage,
    TabsPage,
    BillPaymentPage,
    CardlessPage,
    RequestMoneyPage,
    TransferPage,
    ReviewPage,
    BankingservicesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AccountPage,
    BankingPage,
    NotificationPage,
    OthersMenuPage,
    SettingsPage,
    EditFavoritePage,
    ManageAccountPage,
    ManagePersonalLimitPage,
    ScbPromptPayPage,
    AddAccountPage,
    TabsPage,
    BillPaymentPage,
    CardlessPage,
    RequestMoneyPage,
    TransferPage,
    ReviewPage,
    BankingservicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataBankingProvider
  ]
})
export class AppModule {}
