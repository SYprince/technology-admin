package cn.huanzi.qch.baseadmin.supply.solarmaxinput.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class SolarMaxInputVo extends PageCondition implements Serializable {
    private String doy;//

    private Integer id;//

    private String maxtemp;//

    private String power;//

    private String radiation;//

    private String timestamp;//

}
