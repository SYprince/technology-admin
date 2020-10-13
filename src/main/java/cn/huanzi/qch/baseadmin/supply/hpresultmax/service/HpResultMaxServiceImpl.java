package cn.huanzi.qch.baseadmin.supply.hpresultmax.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.pojo.HpResultMax;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.vo.HpResultMaxVo;
import cn.huanzi.qch.baseadmin.supply.hpresultmax.repository.HpResultMaxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class HpResultMaxServiceImpl extends CommonServiceImpl<HpResultMaxVo, HpResultMax, Integer> implements HpResultMaxService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private HpResultMaxRepository hpResultMaxRepository;
}
