package cn.huanzi.qch.baseadmin.supply.windmaxinput.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/windMaxInput/")
public class WindMaxInputController {


    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/wind/windpower","","");
    }
}
