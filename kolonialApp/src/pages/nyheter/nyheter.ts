import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Nyheter} from "../../models/Nyheter";
import {ToastController} from "ionic-angular";
import { Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {DetailPage} from "../detail/detail";




@IonicPage()
@Component({
  selector: 'page-nyheter',
  templateUrl: 'nyheter.html',
})
export class NyheterPage {

  public loading: boolean; //for spinner
  public Varer: Observable<Nyheter[]>;
  public vareCollection: AngularFirestoreCollection<Nyheter>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public af: AngularFirestore, public toast: ToastController) {

    this.vareCollection = this.af.collection<Nyheter>('Nyheter');
    this.getAllVarerNyheter();


  }

  getAllVarerNyheter() {
    this.loading = true;

    this.Varer = this.vareCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          let data = action.payload.doc.data() as Nyheter;
          let id = action.payload.doc.id;
          console.log('before return object');
          //this.loading = false;
          //funker ikke her heller
          return {
              id,
            ...data
          };
        })
      });
    console.log('after return object');
  }


  goToDetailPage(enVare: Nyheter){
    this.navCtrl.push('DetailPage', {
      enVare,
      vareCollection: this.vareCollection
    })
  }

  goToAbonnerPage(){
    this.navCtrl.push('AbonnerPage');
    this.toast.create({
      message: "Ved å opprette et abonnement vil du få fast levering etter angitt periode, dag og tid",
      duration: 5000,
      position: 'top'
    }).present()
  }

  goToDineEnkeltVarerPage(){
    this.navCtrl.push('DineEnkeltvarerPage')
  }



}
