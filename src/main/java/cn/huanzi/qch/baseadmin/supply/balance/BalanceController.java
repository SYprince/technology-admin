package cn.huanzi.qch.baseadmin.supply.balance;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.calculate.pojo.Calculate;
import cn.huanzi.qch.baseadmin.supply.calculate.service.CalculateService;
import cn.huanzi.qch.baseadmin.supply.calculate.vo.CalculateVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/balance/balanceShow/")
public class BalanceController extends CommonController<CalculateVo, Calculate, Integer> {

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("balance/balanceshow","","");
    }

}
