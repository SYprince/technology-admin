package cn.huanzi.qch.baseadmin.supply.smhpforr.vo;

import cn.huanzi.qch.baseadmin. common.pojo.PageCondition;import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class SmhpForRVo extends PageCondition implements Serializable {
    private String date;//

    private Integer id;//

    private String rainfall;//

    private String smhp;//
    private String smhpMax;//
    private String toy;//

    private String year;//

}
