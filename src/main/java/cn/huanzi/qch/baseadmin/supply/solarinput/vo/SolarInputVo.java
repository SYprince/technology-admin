package cn.huanzi.qch.baseadmin.supply.solarinput.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class SolarInputVo extends PageCondition implements Serializable {

    private Integer id;

    private String power;
    private String powerMax;//电力用的

    private String maxtemp;//电力用的

    private String radiation;
    private String radiationMax;//电力用的

    private String timestamp;

    private String doy;

}
