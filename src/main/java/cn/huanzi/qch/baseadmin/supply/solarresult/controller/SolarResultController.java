package cn.huanzi.qch.baseadmin.supply.solarresult.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresult.vo.SolarResultVo;
import cn.huanzi.qch.baseadmin.supply.solarresult.service.SolarResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supply/solarResult/")
public class SolarResultController extends CommonController<SolarResultVo, SolarResult, Integer> {
    @Autowired
    private SolarResultService solarResultService;
}
