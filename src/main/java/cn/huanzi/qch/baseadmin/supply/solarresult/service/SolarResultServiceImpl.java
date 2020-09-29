package cn.huanzi.qch.baseadmin.supply.solarresult.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import cn.huanzi.qch.baseadmin.supply.solarresult.vo.SolarResultVo;
import cn.huanzi.qch.baseadmin.supply.solarresult.repository.SolarResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class SolarResultServiceImpl extends CommonServiceImpl<SolarResultVo, SolarResult, Integer> implements SolarResultService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SolarResultRepository solarResultRepository;
}
