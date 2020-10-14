package cn.huanzi.qch.baseadmin.supply.windresultmax.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.windresultmax.pojo.WindResultMax;
import cn.huanzi.qch.baseadmin.supply.windresultmax.vo.WindResultMaxVo;
import cn.huanzi.qch.baseadmin.supply.windresultmax.service.WindResultMaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supply/windResultMax/")
public class WindResultMaxController extends CommonController<WindResultMaxVo, WindResultMax, Integer> {
    @Autowired
    private WindResultMaxService windResultMaxService;
}
