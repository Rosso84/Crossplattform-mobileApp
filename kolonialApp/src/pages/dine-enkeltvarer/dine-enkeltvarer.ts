import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Nyheter} from "../../models/Nyheter";
import {Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {EndreAntallVarerPage} from "../endre-antall-varer/endre-antall-varer";


@IonicPage()
@Component({
  selector: 'page-dine-enkeltvarer',
  templateUrl: 'dine-enkeltvarer.html',
})
export class DineEnkeltvarerPage {

  public abonerteVarer: Observable<Nyheter[]>;
  public abonerteVarerCollection: AngularFirestoreCollection<Nyheter>;

  /*Prøvde her å hente alle varer fra Nyheter for så å oppdatere NyheterPage med å fjerne
  *kalender ikonet hvis bruker velger å slette en vare fra abonneringen, men id-til varen samstemte ikke.*/
  public nyheterVarer: Observable<Nyheter[]>;
  public nyheterCollection: AngularFirestoreCollection<Nyheter>;

  public sum: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public af: AngularFirestore, public toast: ToastController) {
    this.nyheterCollection = this.af.collection('Nyheter');
    this.getNyheterVarer();
    this.abonerteVarerCollection = this.af.collection<Nyheter>('AbonerteVarer', (ref) => {
      return ref.where('userId', '==', this.af.app.auth().currentUser.uid);
    });
    this.getAbonnerteVarer();
  }

  removeItem(vare) {
    this.abonerteVarerCollection.doc(vare.id).delete()
      .then(response => {
        console.log(response);
        this.toast.create({
          message: vare.vare + " er fjernet fra Abonneringen",
          duration: 2000
        }).present()
      });
    //TODO: update nyheterPage virker ikke. mulig årsak: id har endret seg ved oprettelse av abonneringen.
    //TODO: Mulig løsning:  hente vare fra nyheter der nyhetervarer.varenavn == vare.varenavn (vare.vare) (vare fra parameteren)
    /* this.nyheterCollection.doc(vare.id).update({
       abonnerer: false
     })*/
  }

  goToEndreAntallPage(varen) {
    this.navCtrl.push('EndreAntallVarerPage', {
      collectionen: this.abonerteVarerCollection,
      varen
    })
  }

  getNyheterVarer() {
    this.nyheterVarer = this.nyheterCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          let data = action.payload.doc.data() as Nyheter;
          let id = action.payload.doc.id;
          return {
            id,
            ...data
          };
        })
      });

  }

  getAbonnerteVarer() {
    this.abonerteVarer = this.abonerteVarerCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          let data = action.payload.doc.data() as Nyheter;
          let id = action.payload.doc.id;
          return {
            id,
            ...data
          };
        })
      });
  }

  sumPrice(varepris) {
    var i;
    for (i = 0; i < varepris; i++) {
      this.sum += this.abonerteVarer[i];
    }

  }
}
