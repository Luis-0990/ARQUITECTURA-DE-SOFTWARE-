import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';
import { ISolicitudMaterial } from '../ISolicitudMaterial';
import { ModalNewBajaComponent } from '../modal-revisa-new-baja/modal-revisa-new-baja.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component';

@Component({
  selector: 'app-new-baja',
  templateUrl: './new-baja.component.html',
  styleUrls: ['./new-baja.component.css']
})
export class NewBajaComponent{
  
  solicitudes: ISolicitudMaterial[] = [];

  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedSolicitud?: ISolicitudMaterial;
 
   constructor(public dialog: MatDialog, public datosSolicitud:DatosService) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosSolicitud.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>{
       console.log(data);
       this.solicitudes = data;
     })    
   }   





openDialogDetails(id:string) {
  console.log("id:"+id);
  this.datosSolicitud.setIdSolicitud(id);
  const dialogRef = this.dialog.open(ModalNewBajaComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}


  
}
       
  