package cn.huanzi.qch.baseadmin.balance.overallmaximumload.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.pojo.OverallMaximumLoad;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.vo.OverallMaximumLoadVo;
import cn.huanzi.qch.baseadmin.balance.overallmaximumload.repository.OverallMaximumLoadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class OverallMaximumLoadServiceImpl extends CommonServiceImpl<OverallMaximumLoadVo, OverallMaximumLoad, Integer> implements OverallMaximumLoadService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private OverallMaximumLoadRepository overallMaximumLoadRepository;
}
