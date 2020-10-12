package cn.huanzi.qch.baseadmin.supply.hpresultmax.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "hp_result_max")
@Data
public class HpResultMax implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String day;//

    private String v1;//

    private String v2;//

    private String v3;//

    private String v4;//

    private String v5;//

    private String v6;//

    private String v7;//

    private String v8;//

    private String v9;//

    private String date;//

}
