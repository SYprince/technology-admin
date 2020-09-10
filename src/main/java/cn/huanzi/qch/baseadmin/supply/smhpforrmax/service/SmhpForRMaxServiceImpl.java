package cn.huanzi.qch.baseadmin.supply.smhpforrmax.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.smhpforrmax.pojo.SmhpForRMax;
import cn.huanzi.qch.baseadmin.supply.smhpforrmax.vo.SmhpForRMaxVo;
import cn.huanzi.qch.baseadmin.supply.smhpforrmax.repository.SmhpForRMaxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class SmhpForRMaxServiceImpl extends CommonServiceImpl<SmhpForRMaxVo, SmhpForRMax, Integer> implements SmhpForRMaxService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SmhpForRMaxRepository smhpForRMaxRepository;
}
