package cn.huanzi.qch.baseadmin.supply.solarmaxinput.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "solar_max_input")
@Data
public class SolarMaxInput implements Serializable {
    private String doy;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String maxtemp;//

    private String power;//

    private String radiation;//

    private String timestamp;//

}
