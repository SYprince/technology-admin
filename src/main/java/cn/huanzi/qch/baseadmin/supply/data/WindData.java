package cn.huanzi.qch.baseadmin.supply.data;

import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import cn.huanzi.qch.baseadmin.supply.smhpforr.service.SmhpForRService;
import cn.huanzi.qch.baseadmin.supply.windinput.pojo.WindInput;
import cn.huanzi.qch.baseadmin.supply.windinput.vo.WindInputVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/data/windData/")
public class WindData extends CommonController<WindInputVo, WindInput, Integer> {
    @Autowired
    private SmhpForRService smhpForRService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/wind/winddata","","");
    }

}
