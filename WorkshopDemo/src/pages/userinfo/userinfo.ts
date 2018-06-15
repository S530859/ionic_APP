import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  user = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:DataService) {
  }

  ionViewWillEnter(){
    this.user = this.dataService.getUser()
  }

}
