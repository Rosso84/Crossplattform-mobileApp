import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFirestore} from "angularfire2/firestore";



@IonicPage()
@Component({
  selector: 'page-abonneringer',
  templateUrl: 'abonneringer.html',
})
export class AbonneringerPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFirestore) {

  }

  goToDineEnkeltVarerPage(){
    this.navCtrl.push('DineEnkeltvarerPage');
  }

  goToDinePakkerPage(){
    this.navCtrl.push('DinePakkerPage')
  }
  goToAbonneringsperiodePage(){
    this.navCtrl.push('AboneringsperiodePage');
  }

  signOut() {
    this.af.app.auth().signOut();
  }


}
