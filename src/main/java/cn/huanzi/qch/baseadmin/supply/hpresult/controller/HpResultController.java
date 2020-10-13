package cn.huanzi.qch.baseadmin.supply.hpresult.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.hpresult.pojo.HpResult;
import cn.huanzi.qch.baseadmin.supply.hpresult.vo.HpResultVo;
import cn.huanzi.qch.baseadmin.supply.hpresult.service.HpResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/supply/hpResult/")
public class HpResultController extends CommonController<HpResultVo, HpResult, Integer> {
    @Autowired
    private HpResultService hpResultService;
}
