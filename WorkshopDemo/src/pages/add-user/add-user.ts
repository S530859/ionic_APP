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
     console.log(this.userdata)
    if(!Object.keys(this.userdata).length){
      this.alertCtrl.create({
        title: "Please Enter Details",
        subTitle: "All fields are blank",
        buttons: ['ok']
      }).present()
      return;
    }


          if(Object.keys(this.userdata).length != 7){
             this.alertCtrl.create({
               title: "Please Details",
               subTitle: "No field can be blank",
               buttons: ['ok']
             }).present()
             return;
          }
     
          if(this.userdata['password'].length > 4){
            this.alertCtrl.create({
              title: "Try Again",
              subTitle: "password needs to have atleast 4 characters",
              buttons: ['ok']
            }).present()
            return;
            
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
