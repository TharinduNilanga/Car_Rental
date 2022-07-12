package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/12/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarDTO {
    private String regNo;
    private String brand;
    private String type;
    private String driveKm;
    private int noOfPassengers;
    private String transmission;
    private String fuelType;
    private double dailyRate;
    private double monthlyRate;
    private double freeMileagePrice;
    private double extraKmPrice;
    private String color;

    List<CarDetailsDTO> carDetails;
}
