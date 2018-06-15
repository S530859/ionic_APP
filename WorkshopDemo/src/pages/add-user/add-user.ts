import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../services/data.service';


@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
   userdata = {}
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private dataservice:DataService) {
  }
  signup(){
    
     for(let value in this.userdata){
          if(!this.userdata[value]){
             this.alertCtrl.create({
               title: "Please Details",
               subTitle: "No field can be blank",
               buttons: ['ok']
             }).present()
             return;
          }
     }

     this.dataservice.posthttpService('signup', this.userdata).subscribe(
       response => {
          console.log(response)
             this.navCtrl.pop()
       },
       error => {
         console.log(error)
       }
     )

     
  }
 

}
