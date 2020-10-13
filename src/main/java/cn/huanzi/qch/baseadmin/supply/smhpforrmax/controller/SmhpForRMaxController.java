package cn.huanzi.qch.baseadmin.supply.smhpforrmax.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/smhpForRMax/")
public class SmhpForRMaxController {

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/hydro/hydropower","","");
    }
}
