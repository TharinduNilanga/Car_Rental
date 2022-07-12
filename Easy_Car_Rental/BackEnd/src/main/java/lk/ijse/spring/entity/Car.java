package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/11/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
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

    @OneToMany(mappedBy = "regNo",cascade = CascadeType.ALL)
    private List<CarDetails> carDetails;


}
