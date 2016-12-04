import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import { Modal3Page } from '../modal3/modal3';

@Component({
  selector: 'page-modal2',
  templateUrl: 'modal2.html'
})
export class Modal2Page {

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello Modal2Page Page');
  }

  goToModal(){
    let modal = this.modalCtrl.create( Modal3Page );
    modal.present();
  }


  close(){
    this.viewCtrl.dismiss();
  }

}
