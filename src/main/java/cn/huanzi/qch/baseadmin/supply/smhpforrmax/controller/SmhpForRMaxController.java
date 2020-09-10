package cn.huanzi.qch.baseadmin.supply.smhpforrmax.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.smhpforrmax.pojo.SmhpForRMax;
import cn.huanzi.qch.baseadmin.supply.smhpforrmax.vo.SmhpForRMaxVo;
import cn.huanzi.qch.baseadmin.supply.smhpforrmax.service.SmhpForRMaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/smhpForRMax/")
public class SmhpForRMaxController extends CommonController<SmhpForRMaxVo, SmhpForRMax, Integer> {
    @Autowired
    private SmhpForRMaxService smhpForRMaxService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/hydro/hydropower","","");
    }
}
