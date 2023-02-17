package uia.com.api.inventario.service;

import jakarta.validation.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uia.com.api.inventario.dto.CategoriaDTO;
import uia.com.api.inventario.dto.SolicitudMaterialDTO;
import uia.com.api.inventario.model.Categoria;
import uia.com.api.inventario.model.ControlId;
import uia.com.api.inventario.model.Item;
import uia.com.api.inventario.model.SolicitudMaterial;
import uia.com.api.inventario.repository.*;

import java.util.ArrayList;

@Service
public class SolicitudEntregaService {
    SolicitudMaterialRepository repositorySolicitudMaterial;
    ItemRepository repositoryItem;
    SubpartidaRepository repositorySubpartida;
    PartidaRepository repositoryPartida;
    CategoriaRepository repositoryCategoria;
    ControlId idControl;
    ControlId idControlDTO;

    Validator validator;

    @Autowired
    public SolicitudEntregaService(SolicitudMaterialRepository repositorySolicitudMaterial,
                                    SubpartidaRepository repositorySubpartida,
                                    PartidaRepository repositoryPartida,
                                    ItemRepository repositoryItem,
                                    CategoriaRepository repositoryCategoria,
                                    Validator validator) {
        this.repositorySolicitudMaterial = repositorySolicitudMaterial;
        this.repositoryItem = repositoryItem;
        this.repositoryCategoria = repositoryCategoria;
        this.repositorySubpartida = repositorySubpartida;
        this.repositoryPartida = repositoryPartida;

        this.validator = validator;
    }

    public SolicitudMaterial save(SolicitudMaterialDTO solicitud) {
        return saveInformation(solicitud);
    }

    public SolicitudMaterial update(SolicitudMaterialDTO solicitud) {
        return saveInformation(solicitud);
    }

    private SolicitudMaterial saveInformation(SolicitudMaterialDTO solicitudInDTO) {
        SolicitudMaterialDTO solicitudes_salvados = new SolicitudMaterialDTO();
        // creacion de nueva solicitud de material
        ArrayList<Item> itemsApartados = new ArrayList<Item>();
        SolicitudMaterial solicitudMaterial = new SolicitudMaterial();
        int itemDisponibles = 0;
        int categoriasApartados = 0;

        return solicitudMaterial;
    }

}
