package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalsDTO;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface RentalService {
    String generateRentalId();
    void saveRental(RentalsDTO dto);
    void updateRental(RentalsDTO dto);
    void deleteRental(String renId);
    RentalsDTO searchRental(String renId);
    List<RentalsDTO> getAllRentals();
}
