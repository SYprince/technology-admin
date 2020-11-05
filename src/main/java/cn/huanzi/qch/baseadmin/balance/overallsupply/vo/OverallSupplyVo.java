package cn.huanzi.qch.baseadmin.balance.overallsupply.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;

@Data
public class OverallSupplyVo extends PageCondition implements Serializable {
    private String area;//

    private Double fire;//

    private Double ground;//

    private Double hydro;//

    private Integer id;//

    private Double nuclear;//

    private Double other;//

    private Double solar;//

    private Double stored;//

    private Double tide;//

    private Double total;//

    private Double wind;//

}
