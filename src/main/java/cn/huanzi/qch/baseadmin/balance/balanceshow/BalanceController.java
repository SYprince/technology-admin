package cn.huanzi.qch.baseadmin.balance.balanceshow;

import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import cn.huanzi.qch.baseadmin.demand.calculate.pojo.Calculate;
import cn.huanzi.qch.baseadmin.demand.calculate.vo.CalculateVo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/balance/balanceShow/")
public class BalanceController extends CommonController<CalculateVo, Calculate, Integer> {

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("balance/balanceshow","","");
    }

}
