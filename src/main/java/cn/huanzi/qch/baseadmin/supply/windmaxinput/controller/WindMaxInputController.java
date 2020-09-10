package cn.huanzi.qch.baseadmin.supply.windmaxinput.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.windmaxinput.pojo.WindMaxInput;
import cn.huanzi.qch.baseadmin.supply.windmaxinput.vo.WindMaxInputVo;
import cn.huanzi.qch.baseadmin.supply.windmaxinput.service.WindMaxInputService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


@RestController
@RequestMapping("/supply/windMaxInput/")
public class WindMaxInputController extends CommonController<WindMaxInputVo, WindMaxInput, Integer> {
    @Autowired
    private WindMaxInputService windMaxInputService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/wind/windpower","","");
    }
}
