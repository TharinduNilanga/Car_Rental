package lk.ijse.spring.service;

import lk.ijse.spring.dto.ReturnRentalsDTO;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface ReturnRentalService {
    String generateReturnId();
    void saveReturn(ReturnRentalsDTO dto);
    void updateReturn(ReturnRentalsDTO dto);
    void deleteReturn(String retId);
    ReturnRentalsDTO searchReturn(String retId);
    List<ReturnRentalsDTO>  getAllReturns();
}
