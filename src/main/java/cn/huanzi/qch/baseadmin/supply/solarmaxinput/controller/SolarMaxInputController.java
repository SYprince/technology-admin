package cn.huanzi.qch.baseadmin.supply.solarmaxinput.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.supply.solarmaxinput.pojo.SolarMaxInput;
import cn.huanzi.qch.baseadmin.supply.solarmaxinput.vo.SolarMaxInputVo;
import cn.huanzi.qch.baseadmin.supply.solarmaxinput.service.SolarMaxInputService;
import org.rosuda.REngine.Rserve.RConnection;
import org.rosuda.REngine.Rserve.RserveException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/supply/solarMaxInput/")
public class SolarMaxInputController extends CommonController<SolarMaxInputVo, SolarMaxInput, Integer> {
    @Autowired
    private SolarMaxInputService solarMaxInputService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/pv/pvpower","","");
    }

    @PostMapping("forcast")
    public String forcast(){
        System.out.println(123);
        return "success";
    }

    public static void main(String[] args) {
        pvpower();
    }
    private static void pvpower() {
        RConnection rc = null;
        String prefix = "";
        String fileName = "E:\\solarFcst9rollingRes\\testRad.R";
        try {
            rc = new RConnection();
            rc.assign("fileName", fileName);
            //执行test.R脚本，执行这一步才能调用里面的自定义函数myFunc，如果不行，就在R工具上也执行一下test.R脚本
            rc.eval("source(fileName)");
            rc.close();
        } catch (RserveException e) {
            e.printStackTrace();
        }

    }
}
