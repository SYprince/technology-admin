package cn.huanzi.qch.baseadmin.supply.smhpforr.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.vo.SmhpForRVo;

import java.util.List;
import java.util.Map;

public interface SmhpForRService extends CommonService<SmhpForRVo, SmhpForR, Integer> {

    Map<String,List> getEchartData(String forcastDate);

    Map<String,List> getEchartDataMax(String forcastDate);
}
