import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import { Modal2Page } from '../modal2/modal2';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  goToModal(){
    let modal = this.modalCtrl.create( Modal2Page );
    modal.present();
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
