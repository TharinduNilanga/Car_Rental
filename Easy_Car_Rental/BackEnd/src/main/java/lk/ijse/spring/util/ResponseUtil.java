package lk.ijse.spring.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Tharindu Nilanga
 * @created 7/11/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ResponseUtil {
    private int code;
    private String message;
    private Object data;
}
