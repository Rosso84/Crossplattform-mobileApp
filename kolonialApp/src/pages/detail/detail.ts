import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Nyheter} from "../../models/Nyheter";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {AbonnerPage} from "../abonner/abonner";
import {abonnerModel} from "../../models/abonnerModel";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public Vare: Nyheter;
  public NyheterCollection: AngularFirestoreCollection<Nyheter>;

  public antallVarer: number = 0;
  public abonnerteVarerCollection: AngularFirestoreCollection<Nyheter>; //bruker her Nyhetermodel bare fordi det er samme data som skal pushes opp


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public af: AngularFirestore, public toast: ToastController) {
    this.Vare = this.navParams.get('enVare');
    this.NyheterCollection = this.navParams.get('vareCollection')
    this.abonnerteVarerCollection =  this.af.collection<Nyheter>('AbonerteVarer');

  }


  goToAbonnerPage() {
    this.navCtrl.push('AbonnerPage', {
      valgtVare: this.Vare,
      collection: this.NyheterCollection
    });
    this.toast.create({
      message: "Ved å opprette et abonnement vil du få fast levering etter angitt periode, dag og tid",
      duration: 5000,
      position: 'top'
    }).present()
  }

  addEnkelVareTilAbonnement(){
    this.abonnerteVarerCollection.add({
      userId: this.af.app.auth().currentUser.uid,
      vare: this.Vare.vare,
      detaljer: this.Vare.detaljer,
      pris: this.Vare.pris,
      vekt: this.Vare.vekt,
      kg_pris: this.Vare.kg_pris,
      imgUrl: this.Vare.imgUrl,
      antall: this.antallVarer,
      abonnerer: true
    } as Nyheter).then()
      .then(response => {
        console.log(response);
        this.toast.create({
          message: "Vare lagt til i abonnementer",
          duration: 2000
        }).present()
      })
      .catch(error => {
        console.log(error);
      })

    this.NyheterCollection.doc(this.Vare.id)
      .update({ abonnerer: this.Vare.abonnerer = true});

    this.navCtrl.pop();
  }

  incrementAntallVarer(){
    this.antallVarer = this.antallVarer + 1;
  }

  decreaseAntallVarer(){
    this.antallVarer = this.antallVarer - 1;

  }

 /*getUserAbonnement(){
   this.abonCollection = this.af.abonerteVarerCollection<abonnerModel>('abonneringer', (ref) => {
     return ref.where('userEmail', '==', this.userEmail);
   })
   this.userAbonnement = this.abonCollection.snapshotChanges()
     .map(actions => {
       return actions.map(action => {
         let data = action.payload.doc.data() as abonnerModel;
         let id = action.payload.doc.id;
         return {
           id,
           ...data
         };
       })
     });
 }*/


}
