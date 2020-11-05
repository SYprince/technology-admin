package cn.huanzi.qch.baseadmin.demand.eyuce.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;

@Data
public class EyuceVo extends PageCondition implements Serializable {
    private String d;//

    private String elec;//

    private String humidity;//

    private Integer id;//

    private String price;//

    private String temperature;//
    private String timestamp;
}
