package cn.huanzi.qch.baseadmin.demand.eyuce.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.demand.eyuce.pojo.Eyuce;
import cn.huanzi.qch.baseadmin.demand.eyuce.vo.EyuceVo;

import java.util.List;
import java.util.Map;

public interface EyuceService extends CommonService<EyuceVo, Eyuce, Integer> {

    Map<String,List> getEchartData(String forcastDate);
}
