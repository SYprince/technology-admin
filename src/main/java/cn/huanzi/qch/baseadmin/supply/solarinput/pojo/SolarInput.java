package cn.huanzi.qch.baseadmin.supply.solarinput.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "solar_input")
@Data
public class SolarInput implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String power;
    private String powerMax;//电力用的

    private String maxtemp;//电力用的

    private String radiation;
    private String radiationMax;//电力用的

    private String timestamp;

    private String doy;

}
