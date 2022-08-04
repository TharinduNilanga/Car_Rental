package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rentals;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ReturnRentalsDTO {
    private String retId;
    private String renId;
    private String cusEmail;
    private String regNo;
    private double lossDamageWaiver;
    private String driveKm;
    private double damages;
    private double totalPayment;

}
