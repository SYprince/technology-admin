package cn.huanzi.qch.baseadmin.balance.overallmaximumload.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.balance.overallelec.pojo.OverallElec;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.repository.OverallMaximumLoadRepository;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.pojo.OverallMaximumLoad;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.vo.OverallMaximumLoadVo;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.service.OverallMaximumLoadService;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/balance/overallMaximumLoad/")
public class OverallMaximumLoadController extends CommonController<OverallMaximumLoadVo, OverallMaximumLoad, Integer> {
    @Autowired
    private OverallMaximumLoadService overallMaximumLoadService;
    @Autowired
    private OverallMaximumLoadRepository overallMaximumLoadRepository;
    //@GetMapping("index")
    //public ModelAndView index(){
    //    return new ModelAndView("balance/balanceoverallmaximumload","","");
    //}

    /**
     * 不分页
     */
    @PostMapping("noPageData")
    @Decrypt
    @Encrypt
    public Result<List<OverallMaximumLoad>> noPageData(){
        List<OverallMaximumLoad> noPageResult = overallMaximumLoadRepository.findAll();
        return Result.of(noPageResult);
    }
}
