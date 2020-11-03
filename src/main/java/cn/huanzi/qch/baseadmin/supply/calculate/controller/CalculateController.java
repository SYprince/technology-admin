package cn.huanzi.qch.baseadmin.supply.calculate.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.calculate.pojo.Calculate;
import cn.huanzi.qch.baseadmin.supply.calculate.vo.CalculateVo;
import cn.huanzi.qch.baseadmin.supply.calculate.service.CalculateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/demand/calculate/")
public class CalculateController extends CommonController<CalculateVo, Calculate, Integer> {
    @Autowired
    private CalculateService calculateService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("demand/calculate","","");
    }

    /**
     * 计算
     * @param forcastDate
     * @return
     */
    @PostMapping("calculate")
    @Decrypt
    @Encrypt
    public Result calculate(String forcastDate){
       int result = calculateService.calculate(forcastDate);

        return Result.of(result);
    }

    /**
     * 预测结果曲线查询接口
     */
    @PostMapping("echartdata")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> getEchartData(String forcastDate){
        Map<String,List> result = calculateService.getEchartData(forcastDate);

        return Result.of(result);
    }
}
