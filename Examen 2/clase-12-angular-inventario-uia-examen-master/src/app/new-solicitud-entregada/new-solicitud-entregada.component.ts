import { Component } from '@angular/core';

@Component({
  selector: 'app-new-solicitud-entregada',
  templateUrl: './new-solicitud-entregada.component.html',
  styleUrls: ['./new-solicitud-entregada.component.css']
})
export class NewSolicitudEntregadaComponent {

  nuevaSolicitud: ISolicitudMaterial[] = [];

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
  const dialogRef = this.dialog.open(ModalDetailsComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}
  
}
