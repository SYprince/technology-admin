package cn.huanzi.qch.baseadmin.data;

import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.service.SmhpForRService;
import cn.huanzi.qch.baseadmin.supply.smhpforr.vo.SmhpForRVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/data/hydroData/")
public class HydroData extends CommonController<SmhpForRVo, SmhpForR, Integer> {
    @Autowired
    private SmhpForRService smhpForRService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/hydro/hydrodata","","");
    }

}
