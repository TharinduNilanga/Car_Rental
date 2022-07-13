package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
public interface CustomerService {
    /*String generateCustomerId();*/
    void saveCustomer(CustomerDTO dto);
    void updateCustomer(CustomerDTO dto);
    void deleteCustomer(String eMail);
    CustomerDTO searchCustomer(String eMail);
    List<CustomerDTO> getAllCustomer();

}
