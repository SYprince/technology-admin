package cn.huanzi.qch.baseadmin.balance.overallelec.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;

@Data
public class OverallElecVo extends PageCondition implements Serializable {
    private String area;//

    private Integer id;//

    private Double increaseRate;//

    private Double societyElec;//

}
