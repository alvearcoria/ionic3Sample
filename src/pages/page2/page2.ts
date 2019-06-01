import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController : ViewController) {
    console.log('Paso 1 pagina 2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
    console.log('Paso 2 pagina 2');
  }

  ionViewWillEnter(){
    console.log('paso 3 pagina 2');
  }

  ionViewDidEnter(){
    console.log('Paso 4 pagina 2');
  }

  ionViewWillLeave(){
    console.log('Paso 5 - Pagina 2 y deja sser root');
  }

  ionViewDidLeave(){
    console.log('Page 2 Paso 6 LA pagina ya no es root root');
  }

  ionViewWillunload(){
    console.log('Page 2 Paso 7 la instancia de la pagina murio');
  }

  closeModal(){
    this.viewController.dismiss({valor1:"Mensaje modal page 2"});
  }

}
