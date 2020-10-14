package cn.huanzi.qch.baseadmin.supply.windresultmax.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.windresultmax.pojo.WindResultMax;
import cn.huanzi.qch.baseadmin.supply.windresultmax.vo.WindResultMaxVo;
import cn.huanzi.qch.baseadmin.supply.windresultmax.repository.WindResultMaxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class WindResultMaxServiceImpl extends CommonServiceImpl<WindResultMaxVo, WindResultMax, Integer> implements WindResultMaxService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private WindResultMaxRepository windResultMaxRepository;
}
