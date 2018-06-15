import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';

import { DataService } from '../services/data.service';
import { LoginPage } from '../pages/login/login';
import { UserinfoPage } from '../pages/userinfo/userinfo';
import { UsersListPage } from '../pages/users-list/users-list';
import { AddUserPage } from '../pages/add-user/add-user';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UsersListPage,
    UserinfoPage,
    AddUserPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, 
    UsersListPage,
    UserinfoPage,
    AddUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
