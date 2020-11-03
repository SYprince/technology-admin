package cn.huanzi.qch.baseadmin.supply.eyuce.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.eyuce.pojo.Eyuce;
import cn.huanzi.qch.baseadmin.supply.eyuce.vo.EyuceVo;
import cn.huanzi.qch.baseadmin.supply.eyuce.repository.EyuceRepository;
import cn.huanzi.qch.baseadmin.supply.windresult.pojo.WindResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
//import org.ujmp.core.doublematrix.calculation.entrywise.creators.Rand;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@Service
@Transactional
public class EyuceServiceImpl extends CommonServiceImpl<EyuceVo, Eyuce, Integer> implements EyuceService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private EyuceRepository eyuceRepository;

    private static ExampleMatcher exampleMatcher = ExampleMatcher.matching();
    {
        exampleMatcher = exampleMatcher.withMatcher("timestamp",ExampleMatcher.GenericPropertyMatchers.startsWith());
    }
    @Override
    public Map<String,List> getEchartData(String forcastDate) {
        Random random = new Random();

        Eyuce eyuce = new Eyuce();
        eyuce.setTimestamp(forcastDate);
        Example example = Example.of(eyuce, exampleMatcher);
        List<Eyuce> eyuceList = eyuceRepository.findAll(example);

        List forcastlist = new ArrayList();
        List practicallist = new ArrayList();
        for (Eyuce t : eyuceList) {
            String elec = t.getElec();
            String forcastElec = String.valueOf((Double.valueOf(elec)+(random.nextInt(500) -300)));
            practicallist.add(elec);
            forcastlist.add(forcastElec);
        }
        Map<String, List> map = new HashMap<>(2);
        map.put("forcastlist",forcastlist);
        map.put("practicallist",practicallist);
        return map;
    }
}
