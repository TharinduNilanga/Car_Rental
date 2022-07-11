package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String eMail;
    private String userName;
    private String password;
    private String nic;
    private String nicImg;
    private String licenseNo;
    private String licenseImg;
    private String address;
    private String contact;

}
