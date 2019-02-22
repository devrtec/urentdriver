import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-motoristaview",
  templateUrl: "motoristaview.html"
})
export class MotoristaviewPage {
  public motorista;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.motorista = [
      {
        nome: "Vitor",
        sobrenome: "Hugo da Silva",
        email: "vitor@vitor.com.br",
        cel: "+55 31 99434-5432",
        status: "Disponível",
        estado: "Minas Gerais",
        municipio: "Belo Horizonte",
        bairro: "Boa Vista",
        cpf: "014.546.789-96"
      },
      {
        nome: "Guilherme",
        sobrenome: "Santos",
        email: "guisantos@guisantos.com.br",
        cel: "+55 31 98930-4493",
        status: "Disponível",
        estado: "Minas Gerais",
        municipio: "Betim",
        bairro: "Centro",
        cpf: "876.435.321-65"
      },
      {
        nome: "Robson",
        sobrenome: "Rodrigues dos Reis",
        email: "robson@robson.com.br",
        cel: "+55 31 98912-7334",
        status: "Disponível",
        estado: "Minas Gerais",
        municipio: "Contagem",
        bairro: "California",
        cpf: "432.344.542-54"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MotoristaviewPage");

    this.storage.get("soulocador_estado").then(val => {
      console.log(val);
    });

    this.storage.get("soulocador_municipio").then(val => {
      console.log(val);
    });
  }
}
