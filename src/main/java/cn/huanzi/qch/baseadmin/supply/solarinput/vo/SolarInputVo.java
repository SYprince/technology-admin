package cn.huanzi.qch.baseadmin.supply.solarinput.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class SolarInputVo extends PageCondition implements Serializable {
    private String doy;//

    private Integer id;//

    private String power;//

    private String radiation;//

    private String timestamp;//

}
