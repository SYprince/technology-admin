package cn.huanzi.qch.baseadmin.balance.overallelec.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.balance.overallelec.repository.OverallElecRepository;
import cn.huanzi.qch.baseadmin.balance.overallsupply.pojo.OverallSupply;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.balance.overallelec.pojo.OverallElec;
import cn.huanzi.qch.baseadmin.balance.overallelec.vo.OverallElecVo;
import cn.huanzi.qch.baseadmin.balance.overallelec.service.OverallElecService;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/balance/overallElec/")
public class OverallElecController extends CommonController<OverallElecVo, OverallElec, Integer> {
    @Autowired
    private OverallElecService overallElecService;
    @Autowired
    private OverallElecRepository overallElecRepository;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("balance/balanceoverallusage","","");
    }

    /**
     * 不分页
     */
    @PostMapping("noPageData")
    @Decrypt
    @Encrypt
    public Result<List<OverallElec>> noPageData(){
        List<OverallElec> noPageResult = overallElecRepository.findAll();
        return Result.of(noPageResult);
    }
}
