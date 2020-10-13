package cn.huanzi.qch.baseadmin.supply.solarinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface SolarInputService extends CommonService<SolarInputVo, SolarInput, Integer> {

     Map<String,List> getEchartData(String forcastDate);

     /**
      * 光伏电力的十条曲线
      * @param forcastDate
      * @return
      */
     Map<String,List> getEchartDataMax(String forcastDate);
}
