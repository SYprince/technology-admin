package cn.huanzi.qch.baseadmin.demand.calculate.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "calculate")
@Data
public class Calculate implements Serializable {
    private String elec;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String price;

    private String timestamp;
    /**
     * 弹性系数
     */
    private String springRate;

}
