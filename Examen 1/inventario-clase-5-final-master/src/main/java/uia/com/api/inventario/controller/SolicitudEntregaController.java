package uia.com.api.inventario.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uia.com.api.inventario.dto.SolicitudMaterialDTO;
import uia.com.api.inventario.model.SolicitudMaterial;
import uia.com.api.inventario.service.SolicitudMaterialService;


@RestController
@RequestMapping("/SolicitudEntrega")
public class SolicitudEntregaController {

    private SolicitudMaterialService solicitudEntregaService;

    @Autowired
    public SolicitudEntregaController(SolicitudMaterialService solicitudMaterialService) {
        this.solicitudEntregaService = solicitudMaterialService;
    }


    @PostMapping
    public ResponseEntity<SolicitudMaterial> save(@RequestBody SolicitudMaterialDTO solicitudEntregaDTO)
    {
        SolicitudMaterial response = solicitudEntregaService.save(solicitudEntregaDTO);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
