package cn.huanzi.qch.baseadmin.data;

import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import cn.huanzi.qch.baseadmin.supply.smhpforr.service.SmhpForRService;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/data/pvData/")
public class PvData extends CommonController<SolarInputVo, SolarInput, Integer> {
    @Autowired
    private SmhpForRService smhpForRService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/pv/pvdata","","");
    }

}
