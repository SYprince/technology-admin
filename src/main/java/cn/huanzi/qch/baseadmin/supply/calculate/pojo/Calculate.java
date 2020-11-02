package cn.huanzi.qch.baseadmin.supply.calculate.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "calculate")
@Data
public class Calculate implements Serializable {
    private String elec;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String price;//

    private String timestamp;//

}
