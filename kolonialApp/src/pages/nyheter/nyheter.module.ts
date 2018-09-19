import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NyheterPage } from './nyheter';

@NgModule({
  declarations: [
    NyheterPage,
  ],
  imports: [
    IonicPageModule.forChild(NyheterPage),
  ],
})
export class NyheterPageModule {}
