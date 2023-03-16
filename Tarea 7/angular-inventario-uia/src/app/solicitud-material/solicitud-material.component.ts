import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { ISolicitudMaterial } from './../ISolicitudMaterial';

@Component({
  selector: 'app-solicitud-material',
  templateUrl: './solicitud-material.component.html',
  styleUrls: ['./solicitud-material.component.css']
})
export class SolicitudMaterialComponent {

  solicitudes: ISolicitudMaterial[] = [];

  constructor (public datosSolicitud: DatosService)//26
  {

  }



}
