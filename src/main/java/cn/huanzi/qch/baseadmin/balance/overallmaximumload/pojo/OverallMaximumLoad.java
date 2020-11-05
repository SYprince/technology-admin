package cn.huanzi.qch.baseadmin.balance.overallmaximumload.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "overall_maximum_load")
@Data
public class OverallMaximumLoad implements Serializable {
    private String area;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private Double increaseRate;//

    private Double lastyear;//

    private Double thisyear;//

}
