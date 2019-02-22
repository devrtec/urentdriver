import { Component,  Input } from '@angular/core';
import { NavController } from "ionic-angular";
import { UsuarioshowPage } from '../../pages/usuarioshow/usuarioshow';

@Component({
  selector: 'btn-registrar',
  templateUrl: 'btn-registrar.html'
})

export class BtnRegistrarComponent {
  
  @Input('page') page; 

  constructor(public navCtrl: NavController) {
    console.log('Hello BtnRegistrarComponent Component');  
  }  

  ngAfterViewInit() {  
  }

  pageOnClick() {  
    this.navCtrl.push(UsuarioshowPage);

  console.log("Page", this.page);
  }

}
