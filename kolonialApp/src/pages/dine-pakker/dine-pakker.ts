import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DineEnkeltvarerPage} from "../dine-enkeltvarer/dine-enkeltvarer";

/**
 * Generated class for the DinePakkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dine-pakker',
  templateUrl: 'dine-pakker.html',
})
export class DinePakkerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
