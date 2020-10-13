package cn.huanzi.qch.baseadmin.supply.smhpforr.service;


import cn.huanzi.qch.baseadmin.common.service.CommonServiceImpl;
import cn.huanzi.qch.baseadmin.supply.hpresult.pojo.HpResult;
import cn.huanzi.qch.baseadmin.supply.hpresult.repository.HpResultRepository;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.pojo.HpResultMax;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.repository.HpResultMaxRepository;
import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.repository.SmhpForRRepository;
import cn.huanzi.qch.baseadmin.supply.smhpforr.vo.SmhpForRVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.pojo.SolarResultMax;
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
public class SmhpForRServiceImpl extends CommonServiceImpl<SmhpForRVo, SmhpForR, Integer> implements SmhpForRService {

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SmhpForRRepository smhpForRRepository;
    @Autowired
    private HpResultRepository hpResultRepository;
    @Autowired
    private HpResultMaxRepository hpResultMaxRepository;

    private static Boolean isMax = false;
    private static ExampleMatcher exampleMatcher = ExampleMatcher.matching();
    {
        exampleMatcher = exampleMatcher.withMatcher("date",ExampleMatcher.GenericPropertyMatchers.startsWith());
    }
    @Override
    public Map<String,List> getEchartData(String forcastDate) {

        List power = getInputDateByForcastDate(forcastDate,isMax);
        ///
        HpResult hpResult = new HpResult();
        hpResult.setDate(forcastDate);
        Example example = Example.of(hpResult , exampleMatcher);
        List<HpResult> resultData = hpResultRepository.findAll(example);

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

        for (HpResult s : resultData) {
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
        SmhpForR smhpForR = new SmhpForR();
        smhpForR.setDate(forcastDate);

        Example example = Example.of(smhpForR , exampleMatcher);
        List<SmhpForR> inputData = smhpForRRepository.findAll(example);
        List power = new ArrayList();
        for (SmhpForR s : inputData) {
            if(isMax){
                //电力预测用的不同字段
                power.add(s.getSmhpMax());
            }else {
                power.add(s.getSmhp());
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
        HpResultMax hpResultMax = new HpResultMax();
        hpResultMax.setDate(forcastDate);
        Example example = Example.of(hpResultMax , exampleMatcher);
        List<HpResultMax> resultData = hpResultMaxRepository.findAll(example);

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

        for (HpResultMax s : resultData) {
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
