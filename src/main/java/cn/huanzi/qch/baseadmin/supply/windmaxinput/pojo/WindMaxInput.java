package cn.huanzi.qch.baseadmin.supply.windmaxinput.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "wind_max_input")
@Data
public class WindMaxInput implements Serializable {
    private String doy;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String targetvar;//

    private String targetvarMax;//

    private String timestamp;//

    private String v;//

    private String ws100;//

    private String ws100Max;//

}
