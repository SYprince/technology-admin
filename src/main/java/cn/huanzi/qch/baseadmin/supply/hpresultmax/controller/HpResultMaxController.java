package cn.huanzi.qch.baseadmin.supply.hpresultmax.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.pojo.HpResultMax;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.vo.HpResultMaxVo;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.service.HpResultMaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supply/hpResultMax/")
public class HpResultMaxController extends CommonController<HpResultMaxVo, HpResultMax, Integer> {
    @Autowired
    private HpResultMaxService hpResultMaxService;
}
