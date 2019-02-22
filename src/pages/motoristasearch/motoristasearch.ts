import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { EstadoselectedPage } from "../estadoselected/estadoselected";
import { MunicipioselectedPage } from "../municipioselected/municipioselected";
import { MotoristaviewPage } from "../motoristaview/motoristaview";
import { LocadorshowPage } from "../locadorshow/locadorshow";
import { Storage } from "@ionic/storage";
import { CapitalService } from "../../services/capital.service";

@Component({
  selector: "page-motoristasearch",
  templateUrl: "motoristasearch.html"
})
export class MotoristasearchPage {

  public page: any = "locador";

  public estado: string = "Minas Gerais";
  public municipio: string = "Belo Horizonte";
  public locadorshowPage: any;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private capitalService: CapitalService
  ) {
    this.locadorshowPage = LocadorshowPage;
  }

  ionViewDidLoad() {} 

  ionViewWillEnter() {
    this.storage.get("ionViewPrevious").then(val => {
      let previousPage: string = val;

      this.storage.get("soulocador_estado").then(val => {
        this.estado = val.nome;
      });

      if (previousPage !== "CidadeselectedPage") {
        this.storage.get("soulocador_estado").then(val => {
          this.municipio = this.capitalService.GetCapital(val.id);
          this.storage.set("soulocador_municipio", this.municipio);
        });
      } else {
        this.storage.get("soulocador_municipio").then(val => {
          this.municipio = val;
        });
      }
    });
  }  
  
  openPageEstadoSelectedbtnOnClick() {
    this.navCtrl.push(EstadoselectedPage);
  }

  openPageMunicipioSelectedbtnOnClick() {
    this.navCtrl.push(MunicipioselectedPage);
  }

  openPageMotoristaViewbtnOnClick() {
    this.navCtrl.push(MotoristaviewPage);
  }
}
