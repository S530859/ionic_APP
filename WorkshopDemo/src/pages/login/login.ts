import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { UsersListPage } from '../users-list/users-list';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logindata = {}
  constructor(private alertctrl: AlertController,private modalctrl: ModalController,public navCtrl: NavController, public navParams: NavParams,private httpservice: DataService) {
  }

  signin(){
      const modal = this.modalctrl.create(UsersListPage)
      modal.present()
      console.log(this.logindata)
      this.httpservice.posthttpService('signin', this.logindata)
      .subscribe(
        response => {
            const modal = this.modalctrl.create(UsersListPage)
            modal.present()
        },
        error => {
            console.log(error)
            const alert = this.alertctrl.create({
              title: "Try Again",
              subTitle: JSON.parse(error._body).message,
              buttons: ['ok']
            });
            alert.present()

        }
      )
  }

  

 

}
