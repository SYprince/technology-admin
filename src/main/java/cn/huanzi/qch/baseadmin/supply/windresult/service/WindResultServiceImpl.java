package cn.huanzi.qch.baseadmin.supply.windresult.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.windresult.pojo.WindResult;
import cn.huanzi.qch.baseadmin.supply.windresult.vo.WindResultVo;
import cn.huanzi.qch.baseadmin.supply.windresult.repository.WindResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class WindResultServiceImpl extends CommonServiceImpl<WindResultVo, WindResult, Integer> implements WindResultService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private WindResultRepository windResultRepository;
}
