package uia.com.api.neo4jinventario.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes;

import org.springframework.data.neo4j.core.schema.*;

import java.util.ArrayList;
import java.util.List;

@Node("Item")
public class Item implements INivelInventario {
    @Id
    @GeneratedValue
    private Long id;
    @Relationship("items")
    private List<Item> items= new ArrayList<>();
    @Property("name")
    private String name;
    @Property("patida")
    private String patida;
    @Property("subpartida")
    private String subpartida;
    @Property("categoria")
    private String categoria;
    @Property("descripcion")
    private String descripcion;
    @Relationship("proveedor")
    private Proveedor proveedor;

    public Item(Long id, String name, String categoria, String cantidad,String idpPartida, String idSubpartida, String idCategoria,
                String idLote, String fechaIngreso, String idProveedor, Proveedor proveedor)
    {
    }


}
