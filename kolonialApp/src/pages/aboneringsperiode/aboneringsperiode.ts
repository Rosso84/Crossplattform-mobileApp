import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {abonnerModel} from "../../models/abonnerModel";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";



@IonicPage()
@Component({
  selector: 'page-aboneringsperiode',
  templateUrl: 'aboneringsperiode.html',
})
export class AboneringsperiodePage {

  public abonnenement: Observable<abonnerModel[]>;
  public collection: AngularFirestoreCollection<abonnerModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public af: AngularFirestore, public toast: ToastController) {
    this.getCollection();
    this.getAbonnement();
  }


  //henter her abonneringsavtaler som kun er registrert med nåværende innlogget brukers brukerId
  getCollection() {
    this.collection = this.af.collection<abonnerModel>('abonneringer', (ref) => {
      return ref.where('userId', '==', this.af.app.auth().currentUser.uid);
    });
  }

  getAbonnement() {
    this.abonnenement = this.collection.snapshotChanges()
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
  }

  deleteAbonnement(abonnement){
    this.collection.doc(abonnement.id)
      .delete()
      .then(response => {
        console.log(response);
       this.toast.create({
          message: "Abonnementet er avsluttet. En ny kan opprettes ved å trykke på " +
          "'+' tegnet øverst til høyre under lister over varer.",
          duration: 10000
        }).setShowCloseButton(true).present()
      })
      .catch(error => {
        console.log(error);
      })


    this.navCtrl.pop();
  }


}
