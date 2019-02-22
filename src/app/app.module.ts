import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { MotoristaviewPage } from "../pages/motoristaview/motoristaview";
import { VeiculoviewPage } from "../pages/veiculoview/veiculoview";
import { MotoristasearchPage } from "../pages/motoristasearch/motoristasearch";
import { EstadoselectedPage } from "../pages/estadoselected/estadoselected";
import { MunicipioselectedPage } from "../pages/municipioselected/municipioselected";
import { MotoristashowPage } from "../pages/motoristashow/motoristashow";
import { LocadorshowPage } from "../pages/locadorshow/locadorshow";
import { UsuarioshowPage } from "../pages/usuarioshow/usuarioshow";
import { BtnRegistrarComponent } from "../components/btn-registrar/btn-registrar";
import { IonicStorageModule } from "@ionic/storage";
import { IBGEService } from "../services/ibge.service";
import { CapitalService } from "../services/capital.service";
import { CommonLibrary } from "../library/common.library";
import { ViaCEPService } from "../services/viacep.service";
import {NgxMaskIonicModule} from 'ngx-mask-ionic'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MotoristaviewPage,
    VeiculoviewPage,
    MotoristasearchPage,
    EstadoselectedPage,
    MunicipioselectedPage,
    MotoristashowPage,
    LocadorshowPage,
    UsuarioshowPage,
    BtnRegistrarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxMaskIonicModule.forRoot()    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MotoristaviewPage,
    VeiculoviewPage,
    MotoristasearchPage,
    EstadoselectedPage,
    MunicipioselectedPage,
    MotoristashowPage,
    LocadorshowPage,
    UsuarioshowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IBGEService,
    CapitalService,
    CommonLibrary,
    ViaCEPService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
