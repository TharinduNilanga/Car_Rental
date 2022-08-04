package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalsDTO;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tharindu Nilanga
 * @created 7/14/2022
 */
@RestController
@RequestMapping("rental/rental")
@CrossOrigin
public class RentalController {
    @Autowired
    RentalService rentalService;

    @GetMapping(path = {"getAll"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"success",rentalService.getAllRentals());
    }

    @GetMapping(path = {"generateId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateId(){
        return new ResponseUtil(200,"success",rentalService.generateRentalId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestBody RentalsDTO dto){
        rentalService.saveRental(dto);
        System.out.println(dto);
        return new ResponseUtil(200,"Rental added successfully...",null);
    }
    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody RentalsDTO dto){
        rentalService.updateRental(dto);
        return new ResponseUtil(200,"Rental update successfully...",null);
    }

    @DeleteMapping(params = {"renId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String renId){
        rentalService.deleteRental(renId);
        return new ResponseUtil(200,"Rental Deleted successfully..",null);
    }

    @GetMapping(path = "search",params = {"renId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String renId){
        return new ResponseUtil(200,"success",rentalService.searchRental(renId));
    }








}
