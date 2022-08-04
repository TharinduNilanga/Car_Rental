package lk.ijse.spring.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
public class RentalRequestDetailsDTO {
    private String reqId;
    private String regNo;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickUpDate;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime pickUpTime;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime returnTime;
    private double lossDamageWaiver;
    private String driver;
}
