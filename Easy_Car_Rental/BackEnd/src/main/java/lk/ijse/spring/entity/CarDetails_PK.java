package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

/**
 * @author Tharindu Nilanga
 * @created 7/11/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarDetails_PK implements Serializable {
    private String regNo;
}
