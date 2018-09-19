import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFirestore} from "angularfire2/firestore";
import {AbonneringerPage} from "../abonneringer/abonneringer";


@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFirestore) {
  }


  signOut() {
    this.af.app.auth().signOut();
  }

  goToDineAbonneringer(){
    this.navCtrl.push('AbonneringerPage')
  }
}
