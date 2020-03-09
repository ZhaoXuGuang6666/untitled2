package Dao;

import Entity.AdministatorEntity;
import org.springframework.stereotype.Component;

@Component
public interface UserDao {
    public AdministatorEntity login (AdministatorEntity entity);
}
