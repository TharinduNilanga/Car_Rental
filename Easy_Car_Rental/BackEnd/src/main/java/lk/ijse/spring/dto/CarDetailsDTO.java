package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Tharindu Nilanga
 * @created 7/12/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarDetailsDTO {
    private String regNo;
    private String firstImg;
    private String secondImg;
    private String thirdImg;
    private String fourthImg;
}
