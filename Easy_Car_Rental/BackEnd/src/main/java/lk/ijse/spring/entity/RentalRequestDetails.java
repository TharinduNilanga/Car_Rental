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
@IdClass(RequestDetails_PK.class)
public class RentalRequestDetails {
    @Id
    private String reqId;
    @Id
    private String regNo;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private double lossDamageWaiver;
    private String lossDamageWaiverSlip;
    private String driver;

    @ManyToOne
    @JoinColumn(name = "reqId",referencedColumnName = "reqId",insertable =false,updatable = false)
    private RentalRequest rentalRequest;

    @ManyToOne
    @JoinColumn(name = "regNo",referencedColumnName = "regNo",insertable = false,updatable = false)
    private Car car;



}
