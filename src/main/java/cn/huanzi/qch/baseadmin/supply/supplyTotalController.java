package cn.huanzi.qch.baseadmin.supply;

import cn.huanzi.qch.baseadmin.balance.overallsupply.pojo.OverallSupply;
import cn.huanzi.qch.baseadmin.balance.overallsupply.repository.OverallSupplyRepository;
import cn.huanzi.qch.baseadmin.balance.overallsupply.service.OverallSupplyService;
import cn.huanzi.qch.baseadmin.balance.overallsupply.vo.OverallSupplyVo;
import cn.huanzi.qch.baseadmin.common.controller.CommonController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Description:
 * version:1.0.0
 * Author: prince
 * email: wangzixian@aoji.cn
 * DateTime: 19:18 2020/11/5
 */
@RestController
@RequestMapping("/supply/supplyTotal/")
public class supplyTotalController {

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/supplytotal","","");

    }
}
