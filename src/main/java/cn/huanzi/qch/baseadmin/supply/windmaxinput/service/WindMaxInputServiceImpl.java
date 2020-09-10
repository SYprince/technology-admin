package cn.huanzi.qch.baseadmin.supply.windmaxinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.windmaxinput.pojo.WindMaxInput;
import cn.huanzi.qch.baseadmin.supply.windmaxinput.vo.WindMaxInputVo;
import cn.huanzi.qch.baseadmin.supply.windmaxinput.repository.WindMaxInputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class WindMaxInputServiceImpl extends CommonServiceImpl<WindMaxInputVo, WindMaxInput, Integer> implements WindMaxInputService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private WindMaxInputRepository windMaxInputRepository;
}
