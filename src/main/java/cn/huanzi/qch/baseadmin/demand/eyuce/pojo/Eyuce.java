package cn.huanzi.qch.baseadmin.demand.eyuce.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

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
