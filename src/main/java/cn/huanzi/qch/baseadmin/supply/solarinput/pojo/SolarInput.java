package cn.huanzi.qch.baseadmin.supply.solarinput.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "solar_input")
@Data
public class SolarInput implements Serializable {
    private String doy;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String power;//

    private String radiation;//

    private String timestamp;//

}
