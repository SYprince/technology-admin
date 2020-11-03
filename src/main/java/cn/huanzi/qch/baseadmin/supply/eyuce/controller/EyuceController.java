package cn.huanzi.qch.baseadmin.supply.eyuce.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.eyuce.pojo.Eyuce;
import cn.huanzi.qch.baseadmin.supply.eyuce.repository.EyuceRepository;
import cn.huanzi.qch.baseadmin.supply.eyuce.vo.EyuceVo;
import cn.huanzi.qch.baseadmin.supply.eyuce.service.EyuceService;
import cn.huanzi.qch.baseadmin.supply.solarinput.controller.SolarInputController;
//import com.jmatio.io.MatFileReader;
//import com.jmatio.types.MLArray;
//import com.jmatio.types.MLDouble;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/demand/eyuce/")
public class EyuceController extends CommonController<EyuceVo, Eyuce, Integer> {

    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d");

    @Autowired
    private EyuceService eyuceService;
    @Autowired
    private EyuceRepository eyuceRepository;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("demand/eyuce","","");
    }

    /**
     * 预测结果曲线查询接口
     */
    @PostMapping("echartdata")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> getEchartData(String forcastDate){
        Map<String,List> result = eyuceService.getEchartData(forcastDate);

        return Result.of(result);
    }
    //@PostMapping("t")//临时导入mat文件数据
    //@Decrypt
    //@Encrypt
    //public void t() throws IOException {
    //    List<Eyuce> list = new ArrayList<>();
    //    MatFileReader read = new MatFileReader("E://Program Files (x86)/MATLAB_R2018b/install/bin/PSO-SVM/eyuceshuju.mat");
    //    MLArray NIRArray = read.getMLArray("NIR");//mat存储的就是img矩阵变量的内容
    //    //MLArray octanceArray =read.getMLArray("octance");
    //    MLDouble n=(MLDouble)NIRArray;
    //    //MLDouble oc=(MLDouble)octanceArray;
    //    double[][] nArray =(n.getArray());//只有jmatio v0.2版本中才有d.getArray方法
    //    //double[][] ocArray=(oc.getArray());
    //    Eyuce eyuce ;
    //    List<String> s = this.newTimeStampList();
    //    for (int i = 0; i < 1826; i++) {
    //        eyuce = new Eyuce();
    //        eyuce.setElec(String.valueOf(nArray[i][0]));
    //        eyuce.setPrice(String.valueOf(nArray[i][1]));
    //        eyuce.setTemperature(String.valueOf(nArray[i][2]));
    //        eyuce.setHumidity(String.valueOf(nArray[i][3]));
    //        eyuce.setD(String.valueOf(nArray[i][4]));
    //        eyuce.setTimestamp(s.get(i+1));
    //        list.add(eyuce);
    //    }
    //    eyuceRepository.saveAll(list);
    //}
    //
    //private  List<String> newTimeStampList(){
    //    Calendar c = Calendar.getInstance();
    //    String timestamp = "2012/12/31";
    //    List<String> timestampList = new ArrayList<>();
    //    timestampList.add("timestamp");//占据0号位置 使日期数据从[1]开始
    //    boolean flag = true;
    //    while (flag){
    //        try {
    //            c.setTime(sdf.parse(timestamp));
    //        } catch (ParseException e) {
    //            e.printStackTrace();
    //        }
    //        c.add(Calendar.DAY_OF_MONTH,1);
    //        String s = sdf.format(c.getTime());
    //        timestampList.add(s);
    //        timestamp = s;
    //        if("2017/12/31".equals(timestamp)){
    //            flag = false;
    //        }
    //    }
    //    return timestampList;
    //}
}
