import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { IBGEService } from "../../services/ibge.service";
//import { MotoristasearchPage } from '../motoristasearch/motoristasearch';

@Component({
  selector: "page-estadoselected",
  templateUrl: "estadoselected.html",
  providers: [IBGEService]
})
export class EstadoselectedPage {
  public estadoList: any[];
  //private estadoDestaque: string;

  constructor(
    private storage: Storage,
    private ibgeService: IBGEService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.ibgeService.GetEstados().then((est: any[]) => {
      this.estadoList = est;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EstadoselectedPage");
  }

  selectedEstadobtnOnClick(est) {
    this.storage.set("ionViewPrevious", "EstadoselectedPage");
    this.storage.set("soulocador_estado", est);
    this.storage.remove("soulocador_municipio");
    this.navCtrl.pop();
  }
}
