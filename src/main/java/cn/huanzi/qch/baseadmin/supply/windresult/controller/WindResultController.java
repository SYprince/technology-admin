package cn.huanzi.qch.baseadmin.supply.windresult.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.windresult.pojo.WindResult;
import cn.huanzi.qch.baseadmin.supply.windresult.vo.WindResultVo;
import cn.huanzi.qch.baseadmin.supply.windresult.service.WindResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supply/windResult/")
public class WindResultController extends CommonController<WindResultVo, WindResult, Integer> {
    @Autowired
    private WindResultService windResultService;
}
