package cn.huanzi.qch.baseadmin.supply.smhpforr.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "smhp_for_r")
@Data
public class SmhpForR implements Serializable {
    private String date;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private String rainfall;//

    private String smhp;//

    private String toy;//

    private String year;//

}
