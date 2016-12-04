import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    
  }

  goToModal(){
    let modal = this.modalCtrl.create( ModalPage );
    modal.present();
  }

}
