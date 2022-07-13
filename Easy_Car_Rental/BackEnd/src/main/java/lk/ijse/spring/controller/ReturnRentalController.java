package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ReturnRentalsDTO;
import lk.ijse.spring.service.ReturnRentalService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tharindu Nilanga
 * @created 7/14/2022
 */
@RestController
@RequestMapping("rental/Return")
@CrossOrigin
public class ReturnRentalController {
    @Autowired
    ReturnRentalService   returnRentalService;

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"success",returnRentalService.getAllReturns());
    }


    @GetMapping(path = "generateId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateId(){
        return new ResponseUtil(200,"success",returnRentalService.generateReturnId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@ModelAttribute ReturnRentalsDTO dto){
        returnRentalService.saveReturn(dto);
        return new ResponseUtil(200,"Return added successfully...",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody ReturnRentalsDTO dto){
        returnRentalService.updateReturn(dto);
        return new ResponseUtil(200,"Return Updated successfully...",null);
    }

    @DeleteMapping(params = {"retId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String retId){
        returnRentalService.deleteReturn(retId);
        return new ResponseUtil(200,"return Delete successfully...",null);
    }

    @GetMapping(path = "search",params = {"retId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String retId){
        return new ResponseUtil(200,"success",returnRentalService.searchReturn(retId));
    }
}
