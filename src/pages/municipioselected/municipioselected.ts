import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController, AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { IBGEService } from "../../services/ibge.service";
//import { MotoristasearchPage } from '../motoristasearch/motoristasearch';

@Component({
  selector: "page-municipioselected",
  templateUrl: "municipioselected.html",
  providers: [IBGEService]
})
export class MunicipioselectedPage {
  public municipioList: any[];
  //private estadoDestaque: string;
 
  constructor(
    private storage: Storage,
    private ibgeService: IBGEService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {     
  }
 
  loadDataMunicipioList() {
    let loader = this.loadCtrl.create({content: 'Carregando...'});
    loader.present();
    this.storage.get("soulocador_estado").then(val => {
      this.ibgeService.GetMunicipios(val.id).then((mun: any[]) => {
        this.municipioList = mun;
        loader.dismiss();
      }).catch(err => {
        loader.dismiss();
        this.alertCtrl.create ({
          title: 'Falha na conexão',
          buttons: [{text: 'Entendi!'}],
          subTitle: 'Não foi possível carregar os dados. Tente novamente.'
        }).present();
      });
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CidadeselectedPage");   
    this.loadDataMunicipioList();
  }

  selectedMunicipiobtnOnClick(mun) {
    this.storage.set("ionViewPrevious", "CidadeselectedPage");
    this.storage.set("soulocador_municipio", mun.nome);
    this.navCtrl.pop();
  }

  searchMunicipioList(ev) {   
    var val = ev.target.value;   
    if (val && val.trim() != "") {
      this.municipioList = this.municipioList.filter(item => {
        return item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.loadDataMunicipioList();
    }
  }
}
