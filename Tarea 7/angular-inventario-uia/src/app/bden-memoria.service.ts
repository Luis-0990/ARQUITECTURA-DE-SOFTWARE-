import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BDenMemoriaService implements InMemoryDbService{ 
  createDb() {
  const partidas= [{
    "id": "Material Oficina",
    "idPartida": "100",
    "name": "Material Oficina",
    "idSubpartida": "120",
    "nameSubpartida": "Silla",
    "idCategoria": "121",
    "nameCategoria": "Silla ejecutiva clase 1",
    "nameLote": "lote1",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "710"
}, {
    "id": "Material Oficina",
    "idPartida": "100",
    "name": "Material Oficina",
    "idSubpartida": "130",
    "nameSubpartida": "Silla",
    "idCategoria": "132",
    "nameCategoria": "Silla ejecutiva clase 2",
    "nameLote": "lote2",
    "minimoNivel": 5,
    "cantidad": 5,
    "idProveedor": "720"
}, {
    "id": "Material Oficina",
    "idPartida": "100",
    "name": "Material Oficina",
    "idSubpartida": "110",
    "nameSubpartida": "Silla",
    "idCategoria": "113",
    "nameCategoria": "Silla secretarial clase 1",
    "nameLote": "lote3",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "730"
}, {
    "id": "Material Oficina",
    "idPartida": "100",
    "name": "Material Oficina",
    "idSubpartida": "110",
    "nameSubpartida": "Silla ",
    "idCategoria": "114",
    "nameCategoria": "Silla secretarial clase 2",
    "nameLote": "lote4",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "740"
},
{
    "id": "Material Oficina",
    "idPartida": "200",
    "name": "Material Oficina",
    "idSubpartida": "220",
    "nameSubpartida": "Escritorio",
    "idCategoria": "221",
    "nameCategoria": "Escritorio ejecutiva clase 1",
    "nameLote": "lote1",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "810"
}, {
    "id": "Material Oficina",
    "idPartida": "200",
    "name": "Material Oficina",
    "idSubpartida": "230",
    "nameSubpartida": "Escritorio",
    "idCategoria": "232",
    "nameCategoria": "Escritorio ejecutiva clase 2",
    "nameLote": "lote2",
    "minimoNivel": 5,
    "cantidad": 5,
    "idProveedor": "820"
}, {
    "id": "Material Oficina",
    "idPartida": "200",
    "name": "Material Oficina",
    "idSubpartida": "220",
    "nameSubpartida": "Escritorio",
    "idCategoria": "223",
    "nameCategoria": "Escritorio secretarial clase 1",
    "nameLote": "lote3",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "830"
}, {
    "id": "Material Oficina",
    "idPartida": "200",
    "name": "Material Oficina",
    "idSubpartida": "210",
    "nameSubpartida": "Escritorio ",
    "idCategoria": "214",
    "nameCategoria": "Escritorio secretarial clase 2",
    "nameLote": "lote4",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "840"
},
{
    "id": "Material Oficina",
    "idPartida": "300",
    "name": "Material Oficina",
    "idSubpartida": "330",
    "nameSubpartida": "Librero",
    "idCategoria": "331",
    "nameCategoria": "Librero ejecutiva clase 1",
    "nameLote": "lote1",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "810"
}, {
    "id": "Material Oficina",
    "idPartida": "300",
    "name": "Material Oficina",
    "idSubpartida": "330",
    "nameSubpartida": "Librero",
    "idCategoria": "333",
    "nameCategoria": "Librero ejecutiva clase 3",
    "nameLote": "lote3",
    "minimoNivel": 5,
    "cantidad": 5,
    "idProveedor": "830"
}, {
    "id": "Material Oficina",
    "idPartida": "300",
    "name": "Material Oficina",
    "idSubpartida": "340",
    "nameSubpartida": "Librero",
    "idCategoria": "343",
    "nameCategoria": "Librero secretarial clase 1",
    "nameLote": "lote3",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "830"
}, {
    "id": "Material Oficina",
    "idPartida": "300",
    "name": "Material Oficina",
    "idSubpartida": "350",
    "nameSubpartida": "Librero ",
    "idCategoria": "355",
    "nameCategoria": "Librero secretarial clase 3",
    "nameLote": "lote4",
    "cantidad": 5,
    "minimoNivel": 5,
    "idProveedor": "840"
  }

  
]
}


}


  


