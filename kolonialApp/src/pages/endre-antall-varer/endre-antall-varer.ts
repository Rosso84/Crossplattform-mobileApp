import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {Nyheter} from "../../models/Nyheter";

/**
 * Generated class for the EndreAntallVarerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endre-antall-varer',
  templateUrl: 'endre-antall-varer.html',
})
export class EndreAntallVarerPage {

  public vare: Nyheter;
 public collection: AngularFirestoreCollection<Nyheter>;
 public antall: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.collection = this.navParams.get('collectionen');
    this.vare = this.navParams.get('varen');
  }

  updateAntallVarer(){
    this.collection.doc(this.vare.id).update({ antall: this.antall});
    this.navCtrl.pop();
  }



}
