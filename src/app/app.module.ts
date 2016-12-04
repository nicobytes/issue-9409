import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { Modal2Page } from '../pages/modal2/modal2';
import { Modal3Page } from '../pages/modal3/modal3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage,
    Modal2Page,
    Modal3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage,
    Modal2Page,
    Modal3Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
