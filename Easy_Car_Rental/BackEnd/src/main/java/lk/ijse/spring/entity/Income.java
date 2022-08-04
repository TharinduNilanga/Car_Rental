package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Tharindu Nilanga
 * @created 8/4/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Income {
    @Id
    private String day;
    private double total;
}
