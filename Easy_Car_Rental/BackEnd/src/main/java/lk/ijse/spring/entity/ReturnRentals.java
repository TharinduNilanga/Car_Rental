package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class ReturnRentals  {
    @Id
    private String retId;
    private String renId;
    private String cusEmail;
    private String regNo;
    private double lossDamageWaiver;
    private String driveKm;
    private String damages;
    private double totalPayment;

    @OneToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "renId",referencedColumnName = "renId",insertable = false,updatable = false)
    private Rentals rentals;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "cusEmail",referencedColumnName = "eMail",insertable = false,updatable = false)
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "regNo",referencedColumnName = "regNo",insertable = false,updatable = false)
    private Car car;
}
