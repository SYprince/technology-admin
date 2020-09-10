package cn.huanzi.qch.baseadmin.supply.smhpforrmax.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class SmhpForRMaxVo extends PageCondition implements Serializable {
    private String date;//

    private Integer id;//

    private String rainfall;//

    private String smhp;//

    private String toy;//

    private String year;//

}
