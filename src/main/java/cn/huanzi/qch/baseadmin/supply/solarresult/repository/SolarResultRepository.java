package cn.huanzi.qch.baseadmin.supply.solarresult.repository;

import cn.huanzi.qch.baseadmin.common.repository.*;
import cn.huanzi.qch.baseadmin.supply.solarresult.pojo.SolarResult;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface SolarResultRepository extends CommonRepository<SolarResult, Integer> {

    //@Transactional
    //@Modifying
    //@Query(value = " update solar_result set",nativeQuery = true)
    //void updateNewResult();
}
