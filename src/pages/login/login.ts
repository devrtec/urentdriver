import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public formTable: FormGroup = new FormGroup({
    email: new FormControl(null, []),  
    senha: new FormControl(null, [])
  });

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  formSubmit() { 
  }

  openPageHomebtnOnClick() {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
