package cn.huanzi.qch.baseadmin.demand.calculate.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;

@Data
public class CalculateVo extends PageCondition implements Serializable {
    private String elec;

    private Integer id;

    private String price;

    private String timestamp;
    /**
     * 弹性系数
     */
    private String springRate;

}
