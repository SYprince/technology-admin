package cn.huanzi.qch.baseadmin.supply.calculate.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.calculate.pojo.Calculate;
import cn.huanzi.qch.baseadmin.supply.calculate.vo.CalculateVo;

import java.util.List;
import java.util.Map;

public interface CalculateService extends CommonService<CalculateVo, Calculate, Integer> {

    Map<String,List> getEchartData(String forcastDate);
}
