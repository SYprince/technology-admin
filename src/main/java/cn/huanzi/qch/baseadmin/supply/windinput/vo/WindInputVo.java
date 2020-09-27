package cn.huanzi.qch.baseadmin.supply.windinput.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class WindInputVo extends PageCondition implements Serializable {
    private String doy;//

    private Integer id;//

    private String targetvar;//

    private String targetvarMax;//

    private String timestamp;//

    private String v;//

    private String ws;//

    private String wsMax;//

}
