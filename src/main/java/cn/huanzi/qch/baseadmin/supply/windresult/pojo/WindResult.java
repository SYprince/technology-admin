package cn.huanzi.qch.baseadmin.supply.windresult.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "wind_result")
@Data
public class WindResult implements Serializable {
    private String day;//1-365天

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String timestamp;//

    private String v1;//

    private String v2;//

    private String v3;//

    private String v4;//

    private String v5;//

    private String v6;//

    private String v7;//

    private String v8;//

    private String v9;//

}
