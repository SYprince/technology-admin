package cn.huanzi.qch.baseadmin.supply.smhpforr.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.vo.SmhpForRVo;
import cn.huanzi.qch.baseadmin.supply.smhpforr.service.SmhpForRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/smhpForR/")
public class SmhpForRController extends CommonController<SmhpForRVo, SmhpForR, Integer> {
    @Autowired
    private SmhpForRService smhpForRService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/hydro/hydroelec","","");
    }
}
