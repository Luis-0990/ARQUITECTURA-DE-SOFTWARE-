import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolicitudMaterialComponent } from './solicitud-material/solicitud-material.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudMaterialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
