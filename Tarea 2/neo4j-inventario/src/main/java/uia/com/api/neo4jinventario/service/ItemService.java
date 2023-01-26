package uia.com.api.neo4jinventario.service;

import org.springframework.beans.factory.annotation.Autowired;
import uia.com.api.neo4jinventario.model.Item;
import uia.com.api.neo4jinventario.repository.ItemRepository;
///////
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uia.com.api.neo4jinventario.DTO.ItemDTO;
import uia.com.api.neo4jinventario.mapper.ApiMapper;
import uia.com.api.neo4jinventario.model.Item;
import uia.com.api.neo4jinventario.repository.ItemRepository;
import java.util.Set;



public class ItemService {
    ItemRepository repository;
    Validator validator;

    @Autowired
    public ItemService(ItemRepository repository, Validator validator) {
        this.repository = repository;
        this.validator = validator;
    }
    public ItemDTO save(ItemDTO item){
        return saveInformation(item);
    }

    public ItemDTO update(ItemDTO item){
        return saveInformation(item);
    }

    private ItemDTO saveInformation(ItemDTO item){

        Item entity = ApiMapper.INSTANCE.DTOToEntity(item);

        Set<ConstraintViolation<Item>> violations = validator.validate(entity);
        if(!violations.isEmpty()){
            throw new ConstraintViolationException(violations);
        }

        Item savedEntity = repository.save(entity);
        return ApiMapper.INSTANCE.entityToDTO(savedEntity);
    }
}
