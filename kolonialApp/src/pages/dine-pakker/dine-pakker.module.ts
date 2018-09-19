import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinePakkerPage } from './dine-pakker';

@NgModule({
  declarations: [
    DinePakkerPage,
  ],
  imports: [
    IonicPageModule.forChild(DinePakkerPage),
  ],
})
export class DinePakkerPageModule {}
