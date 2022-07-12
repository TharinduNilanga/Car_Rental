package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarDetailsRepo;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/12/2022
 */
@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private CarDetailsRepo carDetailsRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveCar(CarDTO dto) {
        Car car = mapper.map(dto, Car.class);
        if (!carRepo.existsById(dto.getRegNo())){
            carRepo.save(car);
            if (dto.getCarDetails().size()<1)throw new RuntimeException("No images added to car details");

        }else {
            throw new RuntimeException("Adding Car failed...! car "+dto.getRegNo()+"already exists......!");
        }

    }

    @Override
    public void deleteCar(String id) {
            if (carRepo.existsById(id)){
                carRepo.deleteById(id);
            }else {
                throw new RuntimeException("Car "+id+"not exists....!");
            }
    }

    @Override
    public void updateCar(CarDTO dto) {
            if (carRepo.existsById(dto.getRegNo())){
                Car car = mapper.map(dto, Car.class);

                if (dto.getCarDetails().size()<1)throw new RuntimeException("No Car images Added...!");

                carRepo.deleteById(dto.getRegNo());
                carRepo.save(car);
            }else {
                throw new RuntimeException("Update car failed "+dto.getRegNo()+" Not Exists");
            }
    }

    @Override
    public CarDTO searchCar(String id) {
        if (carRepo.existsById(id)){
            return mapper.map(carRepo.findById(id),CarDTO.class);
        }else {
            throw new RuntimeException("No "+id+" Exits...!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        return mapper.map(carRepo.findAll(),new TypeToken<List<CarDTO>>(){}.getType());
    }
}
