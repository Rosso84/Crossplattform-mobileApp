import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFirestore} from "angularfire2/firestore";
import {UserInfoPage} from "../user-info/user-info";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public af: AngularFirestore) {
  }

  goToNyheterPage(){
    this.navCtrl.push('NyheterPage')
  }
  goToDineVarerPage(){
    this.navCtrl.push('DineVarerPage')
  }
  goToUserInfoPage(){
    this.navCtrl.push('UserInfoPage')
  }

}
