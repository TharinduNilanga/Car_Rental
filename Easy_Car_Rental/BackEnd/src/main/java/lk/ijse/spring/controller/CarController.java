package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@RestController
@RequestMapping("rental/car")
@CrossOrigin
public class CarController {
    @Autowired
    CarService carService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestBody CarDTO carDTO){
        carService.saveCar(carDTO);
        return new ResponseUtil(200,"Car Added Successfully....!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody CarDTO carDTO){
        carService.saveCar(carDTO);
        return new ResponseUtil(200,"Car Updated Successfully....!",null);
    }

    @DeleteMapping(params = {"regNo"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String regNo){
        carService.deleteCar(regNo);
        return new ResponseUtil(200,"Car DeletedSuccessfully....!",null);
    }

    @GetMapping(path = "/{regNo}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@PathVariable String regNo){
        return new ResponseUtil(200,"Car search Successfully....!",carService.searchCar(regNo));
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"Ok",carService.getAllCars());
    }

}
