import {Component} from '@angular/core';
import {App, IonicPage, NavController, ToastController} from 'ionic-angular';
import {AngularFirestore} from "angularfire2/firestore";




@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  public email: string = '';
  public password: string = '';


  constructor(public navCtrl: NavController, private af: AngularFirestore,
              private toast: ToastController, private app: App) {
    app._setDisableScroll(true);

  }

  lagNyKonto() {
    this.af.app.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        this.toast.create({
          message: error.message,
          duration: 2000
        }).present();
      });
  }

  loggInn() {
    this.af.app.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        this.toast.create({
          message: error.message,
          duration: 2000
        }).present();
      });
  }



}
