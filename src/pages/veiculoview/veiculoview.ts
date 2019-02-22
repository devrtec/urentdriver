import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-veiculoview",
  templateUrl: "veiculoview.html"
})
export class VeiculoviewPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad VeiculoviewPage");
  }
}
