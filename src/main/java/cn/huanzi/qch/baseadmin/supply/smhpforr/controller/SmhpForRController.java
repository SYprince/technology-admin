package cn.huanzi.qch.baseadmin.supply.smhpforr.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.service.SmhpForRService;
import cn.huanzi.qch.baseadmin.supply.smhpforr.vo.SmhpForRVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/supply/smhpForR/")
public class SmhpForRController extends CommonController<SmhpForRVo, SmhpForR, Integer> {
    @Autowired
    private SmhpForRService smhpForRService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/hydro/hydroelec","","");
    }

    /**
     * 水电电量echart十条线查询接口
     */
    @PostMapping("echartdata")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> getEchartData(String forcastDate){
        Map<String,List> result = smhpForRService.getEchartData(forcastDate);

        return Result.of(result);
    }

    /**
     * 水电电力echart十条线查询接口
     */
    @PostMapping("echartdataMax")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> echartdataMax(String forcastDate){
        Map<String,List> result = smhpForRService.getEchartDataMax(forcastDate);

        return Result.of(result);
    }
}
