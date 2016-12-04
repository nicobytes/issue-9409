import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

/*
  Generated class for the Modal3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal3',
  templateUrl: 'modal3.html'
})
export class Modal3Page {

   constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello Modal3Page Page');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
