

package uia.com.api.inventario.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uia.com.api.inventario.dto.PartidaDTO;
import uia.com.api.inventario.model.Partida;
import uia.com.api.inventario.service.PartidaService;
import uia.com.api.inventario.service.SolicitudesService;

import java.util.ArrayList;


@RestController
@RequestMapping("/Solicitudes")
@CrossOrigin(origins = "http://localhost:4200")
public class SolicitudesController {

    private SolicitudesService solicitudesService;

    @Autowired
    public SolicitudesController(PartidaService partidaService) {
        this.solicitudesService = solicitudesService;
    }


    @PostMapping
    public ResponseEntity<PartidaDTO> save(@RequestBody PartidaDTO partidaDTO)
    {
        PartidaDTO response = solicitudesService.save(solicitudesDTO);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<ArrayList<Partida>> save()
    {
        ArrayList<Partida> response = solicitudesService.getAll();
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
