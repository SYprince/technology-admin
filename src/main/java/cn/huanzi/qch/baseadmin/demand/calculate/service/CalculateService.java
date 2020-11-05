package cn.huanzi.qch.baseadmin.demand.calculate.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.demand.calculate.pojo.Calculate;
import cn.huanzi.qch.baseadmin.demand.calculate.vo.CalculateVo;

import java.util.List;
import java.util.Map;

public interface CalculateService extends CommonService<CalculateVo, Calculate, Integer> {

    Map<String,List> getEchartData(String forcastDate);

    int calculate(String forcastDate);
}
