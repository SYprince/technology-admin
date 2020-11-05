package cn.huanzi.qch.baseadmin.balance.overallmaximumload.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;

@Data
public class OverallMaximumLoadVo extends PageCondition implements Serializable {
    private String area;//

    private Integer id;//

    private Double increaseRate;//

    private Double lastyear;//

    private Double thisyear;//

}
