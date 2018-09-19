import { Component } from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from "../pages/home/home";
import {AngularFirestore} from "angularfire2/firestore";
import {LogInPage} from "../pages/log-in/log-in";
import {TabsPage} from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private af: AngularFirestore,
              private toastCtrl: ToastController) {


    const authObserver = af.app.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.rootPage = TabsPage;

            let toast = this.toastCtrl.create({
              message: 'Velkommen!',
              duration: 2000,
              position: 'bottom'
            });

            toast.onDidDismiss(() => {
              console.log('Toast feilet');
            });

            toast.present();

          } else {
            this.rootPage = 'LogInPage';
          }
        }
      )

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}

