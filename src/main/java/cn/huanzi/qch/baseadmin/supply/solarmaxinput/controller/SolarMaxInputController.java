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
        String prefix = "E:\\solarFcst9rollingRes\\";
        String fileName0 = "testRad.R";
        String fileName1 = "collectRad.R";
        String fileName2 = "testRealProcedure.R";
        String fileName3 = "testDistAvgByRad.R";
        String fileName4 = "testFinal.R";
        try {
            rc = new RConnection();
            //rc.assign("fileName0", prefix + fileName0);
            //rc.assign("fileName1", prefix + fileName1);
            //rc.assign("fileName2", prefix + fileName2);
            //rc.assign("fileName3", prefix + fileName3);
            //rc.assign("fileName4", prefix + fileName4);

            //执行test.R脚本，执行这一步才能调用里面的自定义函数myFunc，如果不行，就在R工具上也执行一下test.R脚本
            //rc.eval("source('E://solarFcst9rollingRes/testRad.R')");
            rc.eval("source('E://solarFcst9rollingRes/testDistAvgByRad.R')");
            //rc.eval("source(fileName1)" +
            rc.close();
        } catch (RserveException e) {
            e.printStackTrace();
        }

    }
}
