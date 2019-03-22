import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariovalidLibrary } from "../../library/usuariovalid.library";
import { ViaCEPService } from "../../services/viacep.service";
import { Usuario } from '../../models/usuario.model'
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: "page-usuarioshow",
  templateUrl: "usuarioshow.html",
  providers: [UsuariovalidLibrary, UsuarioService]
})
export class UsuarioshowPage {

  public step = "part1";
  public enderecoCEP: any;

  public formTable: FormGroup = new FormGroup({
    cel: new FormControl(null, [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(15)
    ]),
    email: new FormControl(null, [
      Validators.required,    
      UsuariovalidLibrary.isEmail
    ]),
    nome: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    sobrenome: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40)
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]),
    confirmarsenha: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]),
    cep: new FormControl(null, [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
    ]),
    logradouro: new FormControl(null, [
      Validators.required,
      //Validators.minLength(1),
      //Validators.maxLength(40)    
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(6)
    ]),
    complemento: new FormControl(null, [
      Validators.maxLength(40)
    ]),
    bairro: new FormControl(null, [
      Validators.required,
      //Validators.minLength(1),
      //Validators.maxLength(40)
    ]),
    estado: new FormControl(null, [
      Validators.required,
      //Validators.minLength(4),
      //Validators.maxLength(20)
    ]),
    municipio: new FormControl(null, [
      Validators.required,
      //Validators.minLength(3),
      //Validators.maxLength(40)
    ])
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viaCEPService: ViaCEPService,
    private usuarioService: UsuarioService,
  ) { }

  formSubmit() {   
    let usuario: Usuario = new Usuario(
      null,
      this.formTable.value.nome,
      this.formTable.value.sobrenome,
      this.formTable.value.email,
      this.formTable.value.senha,
      this.formTable.value.cel,
      this.formTable.value.cep,
      this.formTable.value.logradouro,
      this.formTable.value.bairro,
      this.formTable.value.estado,
      this.formTable.value.municipio,
      null,
      null,
      null,
      null
    )   
    this.usuarioService.CreateUsuario(usuario)
      .subscribe((_id) => {
       console.log(_id);
      })
  }

  ionViewWillEnter() { }

  setLimparEndereco() {
    this.formTable.get('logradouro').setValue(null);
    this.formTable.get('complemento').setValue(null);
    this.formTable.get('bairro').setValue(null);
    this.formTable.get('estado').setValue(null);
    this.formTable.get('municipio').setValue(null);
  }

  getCarregarEndereco() {
    if (this.formTable.value.cep.length == 9) {
      this.viaCEPService.GetEndereco(this.formTable.value.cep).then((end: any) => {
        this.enderecoCEP = end;
        this.formTable.get('logradouro').setValue(this.enderecoCEP.logradouro);
        this.formTable.get('complemento').setValue(this.enderecoCEP.complemento);
        this.formTable.get('bairro').setValue(this.enderecoCEP.bairro);
        this.formTable.get('estado').setValue(this.enderecoCEP.uf);
        this.formTable.get('municipio').setValue(this.enderecoCEP.localidade);
      });
    }
  }

  cepOnChange() {
    this.setLimparEndereco();
    this.getCarregarEndereco();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UsuarioshowPage");
  }
}
