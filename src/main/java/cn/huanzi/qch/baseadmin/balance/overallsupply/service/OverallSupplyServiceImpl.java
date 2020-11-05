package cn.huanzi.qch.baseadmin.balance.overallsupply.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.balance.overallsupply.pojo.OverallSupply;
import cn.huanzi.qch.baseadmin.balance.overallsupply.vo.OverallSupplyVo;
import cn.huanzi.qch.baseadmin.balance.overallsupply.repository.OverallSupplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class OverallSupplyServiceImpl extends CommonServiceImpl<OverallSupplyVo, OverallSupply, Integer> implements OverallSupplyService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private OverallSupplyRepository overallSupplyRepository;
}
