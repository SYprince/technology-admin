package cn.huanzi.qch.baseadmin.supply.solarinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.repository.SolarInputRepository;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresult.repository.SolarResultRepository;
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

    @Override
    public Map<String,Set> getEchartData(String forcastDate) {
        ExampleMatcher exampleMatcher = ExampleMatcher.matching();
        exampleMatcher = exampleMatcher.withMatcher("timestamp",ExampleMatcher.GenericPropertyMatchers.startsWith());

        SolarInput solarInput = new SolarInput();
        solarInput.setTimestamp(forcastDate);

        Example example = Example.of(solarInput , exampleMatcher);
        List<SolarInput> inputData = solarInputRepository.findAll(example);

        ///
        SolarResult solarResult = new SolarResult();
        solarResult.setTimestamp(forcastDate);
        Example example1 = Example.of(solarResult , exampleMatcher);
        List<SolarResult> resultData = solarResultRepository.findAll(example1);

        Map<String,Set> map = new HashMap<>(10);
        Set power = new HashSet();
        Set s1 = new HashSet();
        Set s2 = new HashSet();
        Set s3 = new HashSet();
        Set s4 = new HashSet();
        Set s5 = new HashSet();
        Set s6 = new HashSet();
        Set s7 = new HashSet();
        Set s8 = new HashSet();
        Set s9 = new HashSet();
        for (SolarInput s : inputData) {
            power.add(s.getPower());
        }
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
}
