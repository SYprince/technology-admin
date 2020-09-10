package cn.huanzi.qch.baseadmin.supply.solarmaxinput.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.solarmaxinput.pojo.SolarMaxInput;
import cn.huanzi.qch.baseadmin.supply.solarmaxinput.vo.SolarMaxInputVo;
import cn.huanzi.qch.baseadmin.supply.solarmaxinput.repository.SolarMaxInputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class SolarMaxInputServiceImpl extends CommonServiceImpl<SolarMaxInputVo, SolarMaxInput, Integer> implements SolarMaxInputService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SolarMaxInputRepository solarMaxInputRepository;
}
