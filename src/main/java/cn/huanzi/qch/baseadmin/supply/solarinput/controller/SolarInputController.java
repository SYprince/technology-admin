package cn.huanzi.qch.baseadmin.supply.solarinput.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.service.SolarInputService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/solarInput/")
public class SolarInputController extends CommonController<SolarInputVo, SolarInput, Integer> {
    @Autowired
    private SolarInputService solarInputService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/pv/pvelec","","");
    }

    @PostMapping("forcast")
    public String forcast(){
        System.out.println(123);
        return "success";
    }
}
