package Service.Impl;

import Dao.UserDao;
import Entity.AdministatorEntity;
import Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Override
    public AdministatorEntity login(AdministatorEntity administatorEntity) {
        return userDao.login(administatorEntity) ;
    }
}
