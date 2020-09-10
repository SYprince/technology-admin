package cn.huanzi.qch.baseadmin.supply.windinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.windinput.pojo.WindInput;
import cn.huanzi.qch.baseadmin.supply.windinput.vo.WindInputVo;
import cn.huanzi.qch.baseadmin.supply.windinput.repository.WindInputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class WindInputServiceImpl extends CommonServiceImpl<WindInputVo, WindInput, Integer> implements WindInputService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private WindInputRepository windInputRepository;
}
