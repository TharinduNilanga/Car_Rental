package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;

/**
 * @author Tharindu Nilanga
 * @created 7/14/2022
 */
@RestController
@RequestMapping("rental/driver")
@CrossOrigin
public class DriverController {
    @Autowired
    DriverService driverService;

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"success",driverService.getAllDrivers());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestBody DriverDTO dto){
        driverService.saveDiver(dto);
        return new ResponseUtil(200,"Driver Added successfully...",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody DriverDTO dto){
        driverService.updateDriver(dto);
        return new ResponseUtil(200,"Driver updated successfully...!",null);
    }

    @DeleteMapping(params = {"driverEmail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String driverEmail){
        driverService.deleteDriver(driverEmail);
        return new ResponseUtil(200,"Driver Deleted successfully..",null);
    }

    @GetMapping(path = "search",params = {"driverEmail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String driverEmail){
        return new ResponseUtil(200,"success",driverService.searchDriver(driverEmail));
    }
}
