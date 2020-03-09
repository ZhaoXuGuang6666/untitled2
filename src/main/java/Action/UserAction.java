package Action;

import Entity.AdministatorEntity;
import Service.UserService;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class UserAction extends ActionSupport implements ModelDriven<AdministatorEntity> {
    private AdministatorEntity administatorEntity;
@Autowired
private UserService service;
    @Override
    public AdministatorEntity getModel() {
        return administatorEntity;
    }
    public String Login (){
        AdministatorEntity admin=service.login(administatorEntity);
        if (admin==null){
            return ERROR;
        }

        return SUCCESS;
    }
}
