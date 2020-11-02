package cn.huanzi.qch.baseadmin.supply.eyuce.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "eyuce")
@Data
public class Eyuce implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String d;//

    private String elec;//

    private String humidity;//

    private String price;//

    private String temperature;//

    private String timestamp;
}
