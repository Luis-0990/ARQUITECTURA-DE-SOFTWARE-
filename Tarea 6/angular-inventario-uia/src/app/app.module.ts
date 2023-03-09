import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatosService } from './datos.service';
import { BDenMemoriaService } from './bden-memoria.service';

import { AppComponent } from './app.component';
import { SolicitudesComponentComponent } from './solicitudes-component/solicitudes-component.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PartidaComponent } from './partida/partida.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, 
    SolicitudesComponentComponent,
    SolicitudesComponent,
    PartidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
       BDenMemoriaService, { dataEncapsulation: false}//pag83
       )],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
