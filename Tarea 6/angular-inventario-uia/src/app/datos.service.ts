import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { BDenMemoriaService } from './bden-memoria.service';
import { IPartida } from './IPartida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  private partidasUrl = 'api/partidas'
//pag 105
  constructor(private http: HttpClient, bd: BDenMemoriaService) {}

  getPartidas(): Observable<IPartida[]>{
   return this.http.get<IPartida[]>(this.partidasUrl)
  }
}
