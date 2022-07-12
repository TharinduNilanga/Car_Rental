package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author Tharindu Nilanga
 * @created 7/11/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@IdClass(CarDetails_PK.class)
public class CarDetails {
    @Id
    private String regNo;
    private String firstImg;
    private String secondImg;
    private String thirdImg;
    private String fourthImg;
    @ManyToOne
    @JoinColumn(name = "regNo",referencedColumnName = "regNo",insertable = false,updatable = false)
    private Car car;



}
