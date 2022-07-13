package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestDetails_PK implements Serializable {
    private String reqId;
    private String regNo;
}
