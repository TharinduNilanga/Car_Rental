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
    private String eMail;
    private String userName;
    private String password;
    private String nic;
    private String nicImg;
    private String licenseNo;
    private String licenseImg;
    private String address;
    private String contact;
    private Object nicImgFile;
    private Object licenseImgFile;
//https://wireframe.cc/SR85eK
}
