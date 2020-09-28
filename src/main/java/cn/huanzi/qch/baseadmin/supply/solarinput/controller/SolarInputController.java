package cn.huanzi.qch.baseadmin.supply.solarinput.controller;

import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.common.pojo.PageCondition;
import cn.huanzi.qch.baseadmin.common.pojo.PageInfo;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.service.SolarInputService;
import cn.huanzi.qch.baseadmin.util.CopyUtil;
import cn.huanzi.qch.baseadmin.util.ErrorUtil;
import com.csvreader.CsvReader;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/supply/solarInput/")
public class SolarInputController extends CommonController<SolarInputVo, SolarInput, Integer> {
    @Autowired
    private SolarInputService solarInputService;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/pv/pvelec","","");
    }

    /**
     * 返回执行算法后更新后的数据
     * @return
     */
    @PostMapping("forcast")
    public Result<List> forcast(){
        CsvReader csvReader = null;
        ArrayList<String[]> csvList = new ArrayList<>(9);
        try {
            csvReader = new CsvReader("E:\\solarFcst9rollingRes/quantileByDaily.csv",',', Charset.forName("GBK"));
            // 跳过表头
            csvReader.readHeaders();
            while (csvReader.readRecord()){
                csvList.add(csvReader.getValues());
            }
        } catch (IOException e) {
            //e.printStackTrace();
            log.error(ErrorUtil.errorInfoToString(e));
        }finally {
            csvReader.close();
        }


        ArrayList data = new ArrayList(9);
        for (int i =0;i<9;i++){
            String [] temp = new String[30];
            String [] r = csvList.get(i);
            //默认先展示后三十条
            System.arraycopy(r,335,temp,0,30);
            data.add(temp);
        }
        return Result.of(data);
    }


}
