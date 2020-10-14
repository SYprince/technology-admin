package cn.huanzi.qch.baseadmin.supply.solarinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.repository.SolarInputRepository;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresult.repository.SolarResultRepository;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.pojo.SolarResultMax;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.repository.SolarResultMaxRepository;
import jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.lang.reflect.Array;
import java.util.*;

@Service
@Transactional
public class SolarInputServiceImpl extends CommonServiceImpl<SolarInputVo, SolarInput, Integer> implements SolarInputService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SolarInputRepository solarInputRepository;
    @Autowired
    private SolarResultRepository solarResultRepository;
    @Autowired
    private SolarResultMaxRepository solarResultMaxRepository;

    private static Boolean isMax = false;
    private static ExampleMatcher exampleMatcher = ExampleMatcher.matching();
    {
        exampleMatcher = exampleMatcher.withMatcher("timestamp",ExampleMatcher.GenericPropertyMatchers.startsWith());
    }
    @Override
    public Map<String,List> getEchartData(String forcastDate) {

        List power = getInputDateByForcastDate(forcastDate,isMax);
        ///
        SolarResult solarResult = new SolarResult();
        solarResult.setTimestamp(forcastDate);
        Example example = Example.of(solarResult , exampleMatcher);
        List<SolarResult> resultData = solarResultRepository.findAll(example);

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

        for (SolarResult s : resultData) {
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
        SolarInput solarInput = new SolarInput();
        solarInput.setTimestamp(forcastDate);

        Example example = Example.of(solarInput , exampleMatcher);
        List<SolarInput> inputData = solarInputRepository.findAll(example);
        List power = new ArrayList();
        for (SolarInput s : inputData) {
            if(isMax){
                //电力预测用最大电力字段
                power.add(s.getMaxtemp());
            }else {
                power.add(s.getPower());
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
        SolarResultMax solarResultMax = new SolarResultMax();
        solarResultMax.setTimestamp(forcastDate);
        Example example = Example.of(solarResultMax , exampleMatcher);
        List<SolarResultMax> resultData = solarResultMaxRepository.findAll(example);

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

        for (SolarResultMax s : resultData) {
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
