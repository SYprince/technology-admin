package cn.huanzi.qch.baseadmin.util;

import com.csvreader.CsvWriter;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.lang.reflect.Field;
import java.nio.charset.Charset;
import java.util.LinkedHashMap;
import java.util.List;
/**
 * Description:
 * version:1.0.0
 * Author: prince
 * email: wangzixian@aoji.cn
 * DateTime: 10:58 2020/9/18
 */
public class CsvUtil<V> {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("D:\\lalala55.txt");
        FileReader fr = new FileReader("E:\\1234.txt");
        int c =0;
        while( (c=fr.read()) != -1){
            fw.write(c);
        }
        fw.close();fr.close();
    }
    public static<V> void exportCSV( Writer file , String[] headers, List<V> data) {

        try {

            CsvWriter csvWriter = new CsvWriter(file,',');
            csvWriter.writeRecord(headers);

            for(int k=0;k<data.size();k++){
                //curcount++;
                V v = data.get(k);
                for(Field field : v.getClass().getDeclaredFields()){
                    //获取授权
                    field.setAccessible(true);
                    //属性名称
                    String fieldName = field.getName();
                    //属性的值
                    Object fieldValue = null;
                    try {
                        fieldValue = field.get(v);
                    } catch (IllegalAccessException e) {
                        e.printStackTrace();
                    }
                    csvWriter.write(fieldValue.toString());
                }
                csvWriter.endRecord();

                //导出的进度条信息
                //double dPercent=(double)curcount/totalCount;   //将计算出来的数转换成double
                //int  percent=(int)(dPercent*100);               //再乘上100取整
                //request.getSession().setAttribute("curCount", curcount);
                //request.getSession().setAttribute("percent", percent);    //比如这里是50
                //request.getSession().setAttribute("percentText",percent+"%");//这里是50%
            }
            //关闭写入的流
            csvWriter.close();
            //File fileLoad = new File(rootPath);
            //FileInputStream in = new java.io.FileInputStream(fileLoad);
            ////每次写入10240个字节
            //byte[] b = new byte[10240];
            //int n;
            //while ((n = in.read(b)) != -1) {
            //    //out.write(b, 0, n); //每次写入out1024字节
            //}
            //in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
