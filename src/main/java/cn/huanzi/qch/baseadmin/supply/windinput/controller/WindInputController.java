package cn.huanzi.qch.baseadmin.supply.windinput.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.windinput.pojo.WindInput;
import cn.huanzi.qch.baseadmin.supply.windinput.vo.WindInputVo;
import cn.huanzi.qch.baseadmin.supply.windinput.service.WindInputService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/windInput/")
public class WindInputController extends CommonController<WindInputVo, WindInput, Integer> {
    @Autowired
    private WindInputService windInputService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/wind/windelec","","");
    }
}
