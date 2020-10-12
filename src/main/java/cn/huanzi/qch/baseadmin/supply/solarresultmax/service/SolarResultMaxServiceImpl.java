package cn.huanzi.qch.baseadmin.supply.solarresultmax.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.pojo.SolarResultMax;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.vo.SolarResultMaxVo;
import cn.huanzi.qch.baseadmin.supply.solarresultmax.repository.SolarResultMaxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class SolarResultMaxServiceImpl extends CommonServiceImpl<SolarResultMaxVo, SolarResultMax, Integer> implements SolarResultMaxService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SolarResultMaxRepository solarResultMaxRepository;
}
