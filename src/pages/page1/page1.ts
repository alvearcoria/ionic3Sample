import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Page2Page} from './../page2/page2';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController) {
    console.log('Paso 1 pagina 1');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Page1Page');
    console.log('Paso 2 pagina 1');
  }

  ionViewWillEnter(){
    console.log('paso 3 pagina 1');
  }

  ionViewDidEnter(){
    console.log('Paso 4 pagina 1');
  }

  ionViewWillLeave(){
    console.log('Paso 5 - Pagina 1 y deja sser root');
  }

  ionViewDidLeave(){
    console.log('Paso 6 - pag 1 ya no es root')
  }

  /*gotopage2(){
    this.navCtrl.push(Page2Page);
  }*/
  gotopage2(){
    let modalPage2 = this.modalController.create(Page2Page);
    modalPage2.onDidDismiss(responsePage2 => console.log('Pagina 2 a cerrado'));

      modalPage2.present();


  }

}
