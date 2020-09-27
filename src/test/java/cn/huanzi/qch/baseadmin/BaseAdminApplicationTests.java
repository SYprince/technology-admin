package cn.huanzi.qch.baseadmin;

import cn.huanzi.qch.baseadmin.supply.smhpforr.pojo.SmhpForR;
import cn.huanzi.qch.baseadmin.supply.smhpforr.repository.SmhpForRRepository;
import cn.huanzi.qch.baseadmin.supply.smhpforr.service.SmhpForRService;
import cn.huanzi.qch.baseadmin.util.CsvUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BaseAdminApplicationTests {
    @Autowired
    private SmhpForRService smhpForRService;
    @Autowired
    SmhpForRRepository smhpForRRepository;


    @Test
    public void contextLoads() {
        List<SmhpForR> data = smhpForRRepository.findAll();
        String[] headers = {"日期","id","smhp","降雨量","年份","年中位置"};
        String filename = "123水电.csv";

        String rootPath = "E://";
        //FileOutputStream fileOutputStream = new FileOutputStream();
        CsvUtil csvUtil = new CsvUtil();

        File fileLoad = new File(rootPath + filename);
       // csvUtil.exportCSV("E://",filename,headers,data,fileOutputStream);
    }

}
