package cn.huanzi.qch.baseadmin.balance.overallsupply.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.balance.overallsupply.repository.OverallSupplyRepository;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.balance.overallsupply.pojo.OverallSupply;
import cn.huanzi.qch.baseadmin.balance.overallsupply.vo.OverallSupplyVo;
import cn.huanzi.qch.baseadmin.balance.overallsupply.service.OverallSupplyService;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/balance/overallSupply/")
public class OverallSupplyController extends CommonController<OverallSupplyVo, OverallSupply, Integer> {
    @Autowired
    private OverallSupplyService overallSupplyService;
    @Autowired
    private OverallSupplyRepository overallSupplyRepository;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("balance/balanceoverallsupply","","");
    }

    /**
     * 不分页
     */
    @PostMapping("noPageData")
    @Decrypt
    @Encrypt
    public Result<List<OverallSupply>> noPageData(){
        List<OverallSupply> noPageResult = overallSupplyRepository.findAll();
        return Result.of(noPageResult);
    }
}
