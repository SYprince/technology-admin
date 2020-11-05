package cn.huanzi.qch.baseadmin.balance.overallelec.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.balance.overallelec.pojo.OverallElec;
import cn.huanzi.qch.baseadmin.balance.overallelec.vo.OverallElecVo;
import cn.huanzi.qch.baseadmin.balance.overallelec.repository.OverallElecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class OverallElecServiceImpl extends CommonServiceImpl<OverallElecVo, OverallElec, Integer> implements OverallElecService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private OverallElecRepository overallElecRepository;
}
