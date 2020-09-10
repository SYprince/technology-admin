package cn.huanzi.qch.baseadmin.supply.smhpforr.service;

import cn.huanzi.qch.baseadmin.common.service.*;
import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.vo.SmhpForRVo;
import cn.huanzi.qch.baseadmin.supply.smhpforr.repository.SmhpForRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class SmhpForRServiceImpl extends CommonServiceImpl<SmhpForRVo, SmhpForR, Integer> implements SmhpForRService{

    @PersistenceContext
    private EntityManager em;
    @Autowired
    private SmhpForRRepository smhpForRRepository;
}
