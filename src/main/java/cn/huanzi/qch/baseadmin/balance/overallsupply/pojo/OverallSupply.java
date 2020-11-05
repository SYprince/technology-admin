package cn.huanzi.qch.baseadmin.balance.overallsupply.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "overall_supply")
@Data
public class OverallSupply implements Serializable {
    private String area;//

    private Double fire;//

    private Double ground;//

    private Double hydro;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private Double nuclear;//

    private Double other;//

    private Double solar;//

    private Double stored;//

    private Double tide;//

    private Double total;//

    private Double wind;//

}
