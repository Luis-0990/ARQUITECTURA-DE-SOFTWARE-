import { Injectable } from '@angular/core';
import { ISolicitudMaterial } from './ISolicitudMaterial';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BDenMemoriaService } from './bden-memoria.service';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
   
  private idSolicitud: string="";
  private idSolicitud$ = new BehaviorSubject<string>("");

  private SolicitudesUrl = 'api/SolicitudMaterial';

  private solicitudesMaterial= new Observable<ISolicitudMaterial[]>();

  constructor(private http: HttpClient, bd:BDenMemoriaService)
  {
    this.idSolicitud=""
  }

  getSolicitudesMaterial(): Observable<ISolicitudMaterial[]>{
    this.solicitudesMaterial = this.http.get<ISolicitudMaterial[]>(this.SolicitudesUrl);
    return this.solicitudesMaterial;
  }

  setIdSolicitud(id:string)
  {
    this.idSolicitud=id;
    this.idSolicitud$.next(this.idSolicitud);
  }

  getIdSolicitudMaterial(): string{
    return this.idSolicitud;
  }
}
