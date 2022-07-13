package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalRequestDTO;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface RentalRequestService {
    String generateRequestId();
    void  saveRequest(RentalRequestDTO dto);
    void updateRequest(RentalRequestDTO dto);
    void deleteRequest(String reqId);
    RentalRequestDTO   searchRequest(String reqId);
    List<RentalRequestDTO> getAllRequest();
}
