package cn.huanzi.qch.baseadmin.supply.solarresultmax.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.pojo.SolarResultMax;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.vo.SolarResultMaxVo;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.service.SolarResultMaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supply/solarResultMax/")
public class SolarResultMaxController extends CommonController<SolarResultMaxVo, SolarResultMax, Integer> {
    @Autowired
    private SolarResultMaxService solarResultMaxService;
}
