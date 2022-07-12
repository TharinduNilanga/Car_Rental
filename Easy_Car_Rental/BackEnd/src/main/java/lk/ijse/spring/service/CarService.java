package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/12/2022
 */
public interface CarService {
    void saveCar(CarDTO dto);
    void deleteCar(String id);
    void updateCar(CarDTO dto);
    CarDTO searchCar(String id);
    List<CarDTO> getAllCars();
}
