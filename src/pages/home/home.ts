import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
//import { MotoristaviewPage } from '../motoristaview/motoristaview';
import { VeiculoviewPage } from "../veiculoview/veiculoview";
import { MotoristasearchPage } from "../motoristasearch/motoristasearch";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, private storage: Storage) {}

  VeiculobtnOnClick() {
    this.navCtrl.push(VeiculoviewPage);
  }

  ionViewDidLoad() {
    this.storage.set("soulocador_estado", { id: "31", nome: "Minas Gerais" });
    this.storage.set("soulocador_municipio", "Belo Horizonte");
  }

  MotoristaSearchbtnOnClick() {
    this.navCtrl.push(MotoristasearchPage);
  }
}
