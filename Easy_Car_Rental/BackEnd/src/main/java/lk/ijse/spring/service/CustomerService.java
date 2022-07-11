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
    void deleteCustomer(String id);
    CustomerDTO searchCustomer(String id);
    List<CustomerDTO> getAllCustomer();

}
