import { Component } from '@angular/core';

import { DatosService } from '../datos.service';
import { IPartida } from '../../assets/IPartida'



@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent {
partidas: IPartida[] = [];
}
