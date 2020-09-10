package cn.huanzi.qch.baseadmin.supply.solarinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarinput.pojo.SolarInput;
import cn.huanzi.qch.baseadmin.supply.solarinput.vo.SolarInputVo;
import cn.huanzi.qch.baseadmin.supply.solarinput.repository.SolarInputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class SolarInputServiceImpl extends CommonServiceImpl<SolarInputVo, SolarInput, Integer> implements SolarInputService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SolarInputRepository solarInputRepository;
}
