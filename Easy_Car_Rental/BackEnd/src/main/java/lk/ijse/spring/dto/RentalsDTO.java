package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
public class RentalsDTO {
    private String renId;
    private String cusEmail;
    private String regNo;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickUpDate;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime pickUpTime;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime returnTime;
    private String lossDamageWaiver;
    private String driverEmail;

}
