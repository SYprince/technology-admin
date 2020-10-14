package cn.huanzi.qch.baseadmin.supply.windresultmax.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class WindResultMaxVo extends PageCondition implements Serializable {
    private String day;//1-365天

    private Integer id;//

    private String timestamp;//

    private String v1;//

    private String v2;//

    private String v3;//

    private String v4;//

    private String v5;//

    private String v6;//

    private String v7;//

    private String v8;//

    private String v9;//

}
