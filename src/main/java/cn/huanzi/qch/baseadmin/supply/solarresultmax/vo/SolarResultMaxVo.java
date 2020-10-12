package cn.huanzi.qch.baseadmin.supply.solarresultmax.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class SolarResultMaxVo extends PageCondition implements Serializable {
    private Integer id;//

    private String day;//1-365天

    private String v1;//

    private String v2;//

    private String v3;//

    private String v4;//

    private String v5;//

    private String v6;//

    private String v7;//

    private String v8;//

    private String v9;//

    private String timestamp;//

}
