import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Nyheter} from "../../models/Nyheter";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {abonnerModel} from "../../models/abonnerModel";

@IonicPage()
@Component({
  selector: 'page-abonner',
  templateUrl: 'abonner.html',
})
export class AbonnerPage {

  public FraDato: string = "";
  public TilDato: string = "";
  public LeveringssTid: string = "";
  public LeveringsAdresse: string = "";
  public ukeDag: string = "";

  public valgtVare: Nyheter;
  public NyheterCollection: AngularFirestoreCollection<Nyheter>;
  public abonnementCollection: AngularFirestoreCollection<abonnerModel>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFirestore,
              public Toaster: ToastController) {
    this.valgtVare = this.navParams.get('valgtVare');
    this.NyheterCollection = this.navParams.get('NyheterCollection');
    this.abonnementCollection = this.af.collection<abonnerModel>('abonneringer');

  }

  addNewAbonnement(){
    this.abonnementCollection.add({
      userId: this.af.app.auth().currentUser.uid,
      userEmail: this.af.app.auth().currentUser.email,
      fraDato: this.FraDato,
      tilDato: this.TilDato,
      ukedag: this.ukeDag,
      leveringstid: this.LeveringssTid,
      leveringsadresse: this.LeveringsAdresse,
      abonnerer: true
    } as abonnerModel)
      .then(response => {
        console.log(response);
        this.Toaster.create({
          message: "Abonnement opprettet." +
          "Oversikt finner du under 'Abonneringer'.",
          duration: 10000
          }).setShowCloseButton(true).present();
      })
      .catch(error => {
        console.log(error);
      })
    this.navCtrl.pop();
  }

}
