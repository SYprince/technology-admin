package cn.huanzi.qch.baseadmin.supply.windmaxinput.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class WindMaxInputVo extends PageCondition implements Serializable {
    private String doy;//

    private Integer id;//

    private String targetvar;//

    private String targetvarMax;//

    private String timestamp;//

    private String v;//

    private String ws100;//

    private String ws100Max;//

}
