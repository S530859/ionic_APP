import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { UserinfoPage } from '../userinfo/userinfo';
import { AddUserPage } from '../add-user/add-user';



@IonicPage()
@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {
  users = []
  constructor(private dataservice:DataService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
      this.dataservice.gethttpService('getUsersList').subscribe(
        response => {
          console.log(JSON.parse(response['_body']).data)

              this.users = JSON.parse(response['_body']).data;
        },
        error => {
              console.log(error)
        }
      )
  }

  userSelected(user: object){
      this.dataservice.putUser(user)
      this.navCtrl.push(UserinfoPage)
  }
  addUser(){
    this.navCtrl.push(AddUserPage)
  }


}
