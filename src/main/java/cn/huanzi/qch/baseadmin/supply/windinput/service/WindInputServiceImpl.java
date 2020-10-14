package cn.huanzi.qch.baseadmin.supply.windinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.pojo.SolarResultMax;
import cn.huanzi.qch.baseadmin.supply.windinput.pojo.WindInput;
import cn.huanzi.qch.baseadmin.supply.windinput.vo.WindInputVo;
import cn.huanzi.qch.baseadmin.supply.windinput.repository.WindInputRepository;
import cn.huanzi.qch.baseadmin.supply.windresult.pojo.WindResult;
import cn.huanzi.qch.baseadmin.supply.windresult.repository.WindResultRepository;
import cn.huanzi.qch.baseadmin.supply.windresultmax.pojo.WindResultMax;
import cn.huanzi.qch.baseadmin.supply.windresultmax.repository.WindResultMaxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class WindInputServiceImpl extends CommonServiceImpl<WindInputVo, WindInput, Integer> implements WindInputService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private WindInputRepository windInputRepository;
    @Autowired
    private WindResultRepository windResultRepository;
    @Autowired
    private WindResultMaxRepository windResultMaxRepository;

    private static Boolean isMax = false;
    private static ExampleMatcher exampleMatcher = ExampleMatcher.matching();
    {
        exampleMatcher = exampleMatcher.withMatcher("timestamp",ExampleMatcher.GenericPropertyMatchers.startsWith());
    }
    @Override
    public Map<String,List> getEchartData(String forcastDate) {

        List power = getInputDateByForcastDate(forcastDate,isMax);
        ///
        WindResult windResult = new WindResult();
        windResult.setTimestamp(forcastDate);
        Example example = Example.of(windResult , exampleMatcher);
        List<WindResult> resultData = windResultRepository.findAll(example);

        Map<String,List> map = new HashMap<>(10);

        List s1 = new ArrayList();
        List s2 = new ArrayList();
        List s3 = new ArrayList();
        List s4 = new ArrayList();
        List s5 = new ArrayList();
        List s6 = new ArrayList();
        List s7 = new ArrayList();
        List s8 = new ArrayList();
        List s9 = new ArrayList();

        for (WindResult s : resultData) {
            s1.add(s.getV1());
            s2.add(s.getV2());
            s3.add(s.getV3());
            s4.add(s.getV4());
            s5.add(s.getV5());
            s6.add(s.getV6());
            s7.add(s.getV7());
            s8.add(s.getV8());
            s9.add(s.getV9());
        }
        map.put("power",power);
        map.put("v1",s1);
        map.put("v2",s2);
        map.put("v3",s3);
        map.put("v4",s4);
        map.put("v5",s5);
        map.put("v6",s6);
        map.put("v7",s7);
        map.put("v8",s8);
        map.put("v9",s9);

        return map;
    }

    private List getInputDateByForcastDate(String forcastDate,Boolean isMax) {
        WindInput windInput = new WindInput();
        windInput.setTimestamp(forcastDate);

        Example example = Example.of(windInput , exampleMatcher);
        List<WindInput> inputData = windInputRepository.findAll(example);
        List power = new ArrayList();
        for (WindInput s : inputData) {
            if(isMax){
                //电力预测用最大电力字段
                power.add(s.getTargetvarMax());
            }else {
                power.add(s.getTargetvar());
            }
        }
        return power;
    }

    //@SuppressWarnings("Duplicates")
    @Override
    public Map<String, List> getEchartDataMax(String forcastDate) {
        isMax = true;
        List power = getInputDateByForcastDate(forcastDate,isMax);
        ///
        WindResultMax windResultMax = new WindResultMax();
        windResultMax.setTimestamp(forcastDate);
        Example example = Example.of(windResultMax , exampleMatcher);
        List<WindResultMax> resultData = windResultMaxRepository.findAll(example);

        Map<String,List> map = new HashMap<>(10);

        List<String> s1 = new ArrayList<>();
        List<String> s2 = new ArrayList<>();
        List<String> s3 = new ArrayList<>();
        List<String> s4 = new ArrayList<>();
        List<String> s5 = new ArrayList<>();
        List<String> s6 = new ArrayList<>();
        List<String> s7 = new ArrayList<>();
        List<String> s8 = new ArrayList<>();
        List<String> s9 = new ArrayList<>();

        for (WindResultMax s : resultData) {
            s1.add(s.getV1());
            s2.add(s.getV2());
            s3.add(s.getV3());
            s4.add(s.getV4());
            s5.add(s.getV5());
            s6.add(s.getV6());
            s7.add(s.getV7());
            s8.add(s.getV8());
            s9.add(s.getV9());
        }
        map.put("power",power);
        map.put("v1",s1);
        map.put("v2",s2);
        map.put("v3",s3);
        map.put("v4",s4);
        map.put("v5",s5);
        map.put("v6",s6);
        map.put("v7",s7);
        map.put("v8",s8);
        map.put("v9",s9);

        return map;
    }

}
