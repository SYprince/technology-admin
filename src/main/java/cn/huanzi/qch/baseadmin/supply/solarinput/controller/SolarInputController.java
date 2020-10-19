package cn.huanzi.qch.baseadmin.supply.solarinput.controller;

import cn.huanzi.qch.baseadmin.annotation.Decrypt;
import cn.huanzi.qch.baseadmin.annotation.Encrypt;
import cn.huanzi.qch.baseadmin.common.controller.*;
import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.service.SolarInputService;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresult.repository.SolarResultRepository;
import cn.huanzi.qch.baseadmin.util.CsvUtil;
import cn.huanzi.qch.baseadmin.util.ErrorUtil;
import com.csvreader.CsvReader;
import com.jmatio.io.MatFileReader;
import com.jmatio.types.MLArray;
import com.jmatio.types.MLDouble;
import javafx.util.converter.TimeStringConverter;
import lombok.extern.slf4j.Slf4j;
import org.rosuda.REngine.Rserve.RConnection;
import org.rosuda.REngine.Rserve.RserveException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.nio.charset.Charset;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/supply/solarInput/")
public class SolarInputController extends CommonController<SolarInputVo, SolarInput, Integer> {
    public static void main(String[] args) {
        newTimeStampList();
    }
    public static List<String> newTimeStampList(){
        Calendar c = Calendar.getInstance();
        String timestamp = "2013/7/1";
        List<String> timestampList = new ArrayList<>();
        timestampList.add("timestamp");//占据0号位置 使日期数据从[1]开始
        boolean flag = true;
        while (flag){
            try {
                c.setTime(sdf.parse(timestamp));
            } catch (ParseException e) {
                e.printStackTrace();
            }
            c.add(Calendar.DAY_OF_MONTH,1);
            String s = sdf.format(c.getTime());
            timestampList.add(s);
            timestamp = s;
            if("2014/7/1".equals(timestamp)){
                flag = false;
            }
        }
        return timestampList;
    }
    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d");
    @Value("${filepath.solarElecPath}")
    private String solarElecPath;
    @Autowired
    private SolarInputService solarInputService;
    @Autowired
    private SolarResultRepository solarResultRepository;

    @GetMapping("index")
    public ModelAndView index(){
        return new ModelAndView("supply/pv/pvelec","","");
    }

    /**
     * 光伏电量echart十条线查询接口
     */
    @PostMapping("echartdata")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> getEchartData(String forcastDate){
        Map<String,List> result = solarInputService.getEchartData(forcastDate);

        return Result.of(result);
    }

    /**
     * 光伏电力echart十条线查询接口
     */
    @PostMapping("echartdataMax")
    @Decrypt
    @Encrypt
    public Result<Map<String,List>> echartdataMax(String forcastDate){
        Map<String,List> result = solarInputService.getEchartDataMax(forcastDate);

        return Result.of(result);
    }
    /**
     * 备份文件-返回执行算法后更新后的数据
     * @return
     */
    @PostMapping("forcast")
    public Result<List> forcast() throws RserveException {
        CsvUtil.copyFile(solarElecPath ,"quantileByDaily.csv");

        RConnection rc = new RConnection();
        rc.eval("source('"+ solarElecPath +"test.R')");
        rc.close();

        CsvReader csvReader = null;
        ArrayList<String[]> csvList = new ArrayList<>(9);
        try {
            csvReader = new CsvReader(solarElecPath + "quantileByDaily.csv",',', Charset.forName("GBK"));
            // 跳过表头
            //csvReader.readHeaders();
            while (csvReader.readRecord()){
                csvList.add(csvReader.getValues());
            }
        } catch (IOException e) {
            //e.printStackTrace();
            log.error(ErrorUtil.errorInfoToString(e));
        }finally {
            csvReader.close();
        }
        String[] day =csvList.get(0);
        String[] v1 =csvList.get(1);
        String[] v2 =csvList.get(2);
        String[] v3 =csvList.get(3);
        String[] v4 =csvList.get(4);
        String[] v5 =csvList.get(5);
        String[] v6 =csvList.get(6);
        String[] v7 =csvList.get(7);
        String[] v8 =csvList.get(8);
        String[] v9 =csvList.get(9);
        List<String> s = SolarInputController.newTimeStampList();
        List<SolarResult> r = new ArrayList<>();

        for (int i = 1; i <= 365; i++) {
            SolarResult s1 = new SolarResult();
            s1.setId(i+457);
            s1.setDay(day[i]);
            s1.setV1(v1[i]);
            s1.setV2(v2[i]);
            s1.setV3(v3[i]);
            s1.setV4(v4[i]);
            s1.setV5(v5[i]);
            s1.setV6(v6[i]);
            s1.setV7(v7[i]);
            s1.setV8(v8[i]);
            s1.setV9(v9[i]);
            //Calendar.
            s1.setTimestamp(s.get(i));
            r.add(s1);
        }
        solarResultRepository.saveAll(r);

        ArrayList data = new ArrayList(9);

        return Result.of(data);
    }


}
