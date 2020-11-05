package cn.huanzi.qch.baseadmin.balance.overallelec.pojo;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "overall_elec")
@Data
public class OverallElec implements Serializable {
    private String area;//

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;//

    private Double increaseRate;//

    private Double societyElec;//

}
