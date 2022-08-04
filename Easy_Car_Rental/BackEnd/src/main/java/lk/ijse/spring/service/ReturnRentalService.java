package lk.ijse.spring.service;

import lk.ijse.spring.dto.ReturnRentalsDTO;
import lk.ijse.spring.dto.IncomeDTO;

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
    List<IncomeDTO> dailyIncome();
    List<IncomeDTO> MonthlyIncome();
    List<IncomeDTO> AnnuallyIncome();
}
