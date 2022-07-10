package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Lob;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String cusId;
    private String userName;
    private String eMail;
    private String password;
    private String nic;
    @Lob
    private byte[] nicImg;

    private String licenseNo;
    @Lob
    private byte[] licenseImg;

    private String address;
    private String contact;
}
