package cn.huanzi.qch.baseadmin.supply.windinput.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.windinput.pojo.WindInput;
import cn.huanzi.qch.baseadmin.supply.windinput.vo.WindInputVo;
import cn.huanzi.qch.baseadmin.supply.windinput.service.WindInputService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/supply/windInput/")
public class WindInputController extends CommonController<WindInputVo, WindInput, Integer> {
    @Autowired
    private WindInputService windInputService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/wind/windelec","","");
    }

    /**
     * 风电电量echart十条线查询接口
     */
    @PostMapping("echartdata")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> getEchartData(String forcastDate){
        Map<String,List> result = windInputService.getEchartData(forcastDate);

        return Result.of(result);
    }

    /**
     * 风电电力echart十条线查询接口
     */
    @PostMapping("echartdataMax")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> echartdataMax(String forcastDate){
        Map<String,List> result = windInputService.getEchartDataMax(forcastDate);

        return Result.of(result);
    }
}
