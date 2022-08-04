package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Rentals {
    @Id
    private String renId;
    private String cusEmail;
    private String regNo;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private String lossDamageWaiver;
    private String driverEmail;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "driverEmail",referencedColumnName = "driverEmail",insertable = false,updatable = false)
    private Driver driver;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "cusEmail",referencedColumnName = "eMail",insertable = false,updatable = false)
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "regNo",referencedColumnName = "regNo",insertable = false,updatable = false)
    private Car car;


}
