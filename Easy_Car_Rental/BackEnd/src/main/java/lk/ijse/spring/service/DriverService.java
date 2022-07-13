package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.awt.*;
import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface DriverService {
    void saveDiver(DriverDTO dto);
    void updateDriver(DriverDTO dto);
    void deleteDriver(String driverEmail);
    DriverDTO searchDriver(String driverEmail);
    List<DriverDTO> getAllDrivers();

}
