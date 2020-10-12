package cn.huanzi.qch.baseadmin.supply.hpresult.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.hpresult.pojo.HpResult;
import cn.huanzi.qch.baseadmin.supply.hpresult.vo.HpResultVo;
import cn.huanzi.qch.baseadmin.supply.hpresult.repository.HpResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class HpResultServiceImpl extends CommonServiceImpl<HpResultVo, HpResult, Integer> implements HpResultService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private HpResultRepository hpResultRepository;
}
