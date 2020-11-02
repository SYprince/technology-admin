package cn.huanzi.qch.baseadmin.supply.calculate.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.calculate.pojo.Calculate;
import cn.huanzi.qch.baseadmin.supply.calculate.vo.CalculateVo;
import cn.huanzi.qch.baseadmin.supply.calculate.repository.CalculateRepository;
import cn.huanzi.qch.baseadmin.supply.eyuce.pojo.Eyuce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@Service
@Transactional
public class CalculateServiceImpl extends CommonServiceImpl<CalculateVo, Calculate, Integer> implements CalculateService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private CalculateRepository calculateRepository;

    private static ExampleMatcher exampleMatcher = ExampleMatcher.matching();
    {
        exampleMatcher = exampleMatcher.withMatcher("timestamp",ExampleMatcher.GenericPropertyMatchers.startsWith());
    }
    @Override
    public Map<String,List> getEchartData(String forcastDate) {
        Random random = new Random();

        Calculate calculate = new Calculate();
        calculate.setTimestamp(forcastDate);
        Example example = Example.of(calculate, exampleMatcher);
        List<Calculate> calculateList = calculateRepository.findAll(example);

        List forcastlist = new ArrayList();
        List practicallist = new ArrayList();
        for (Calculate t : calculateList) {
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
