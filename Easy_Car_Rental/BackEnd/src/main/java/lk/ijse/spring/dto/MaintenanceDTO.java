package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Car;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class MaintenanceDTO {
    private String maiId;
    private String regNo;
    private String serviceType;
}
