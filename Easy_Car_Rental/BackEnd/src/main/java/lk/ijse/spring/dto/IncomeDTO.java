package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;
import java.time.LocalDate;

/**
 * @author Tharindu Nilanga
 * @created 8/4/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class IncomeDTO {
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;
    private double total;
}
