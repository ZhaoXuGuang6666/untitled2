package Entity;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class AdministatorEntity {
    private String userName;
    private String passWord;
    private int grade;
    private int adminId;

}
