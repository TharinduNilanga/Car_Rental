package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Tharindu Nilanga
 * @created 8/4/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class IncomeDTO {
    private String date;
    private double total;
}
