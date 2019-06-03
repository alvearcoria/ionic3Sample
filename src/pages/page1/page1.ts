import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ActionSheetController} from 'ionic-angular';
import { Page2Page} from './../page2/page2';
import { NgForm } from './../../../node_modules/@angular/forms';

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
  @ViewChild('inputFocus') inputText;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController, public alert:AlertController, public sheetController : ActionSheetController) {
    console.log('Paso 1 pagina 1');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Page1Page');
    console.log('Paso 2 pagina 1');

    setTimeout(()=>{
      this.inputText.setFocus();
    },100);
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

  pressOpctions(){

  }

  onSubmit(form : NgForm){
    console.log(form.value);
    let testData = form.value;

    try{
      if(testData.username == null || testData.username == undefined || testData.username.trim() == '') throw new Error("Debe de ingresar nombre");
      if(testData.phone == null || testData.phone == undefined || testData.phone.trim() == '') throw new Error("Debe de ingresar nombre");

    }catch(error){
      console.error(error);
      this.showErrorAlert(error.message);
    }

  }

  showErrorAlert(message : string){
    let alertView = this.alert.create({
      title : "Error",
      message : message
    })
    alertView.present();
  }

  showOptions(){
    let optionView = this.alert.create({
      title:"Eliga una opcion",
      buttons : [{text : "Ver en page", handler : () => this.pressOpctions()},
      {text : "Ver een modal", handler : () => this.gotopage2()}]
    })
    optionView.present();
  }

  actionSheet(){
    let actSheet = this.sheetController.create({
      title:"Eliga una opcion sheet",
      buttons : [{text : "Ver en page", handler : () => this.pressOpctions()},
      {text : "Ver een modal", handler : () => this.gotopage2()}]

    })
    actSheet.present();
  }





}
