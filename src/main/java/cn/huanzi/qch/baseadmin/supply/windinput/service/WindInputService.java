package cn.huanzi.qch.baseadmin.supply.windinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.windinput.pojo.WindInput;
import cn.huanzi.qch.baseadmin.supply.windinput.vo.WindInputVo;

import java.util.List;
import java.util.Map;

public interface WindInputService extends CommonService<WindInputVo, WindInput, Integer> {

    Map<String,List> getEchartData(String forcastDate);

    Map<String,List> getEchartDataMax(String forcastDate);
}
