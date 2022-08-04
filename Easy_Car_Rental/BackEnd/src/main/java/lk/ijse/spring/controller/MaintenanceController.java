package lk.ijse.spring.controller;

import lk.ijse.spring.dto.MaintenanceDTO;
import lk.ijse.spring.service.MaintenanceService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tharindu Nilanga
 * @created 7/14/2022
 */
@RestController
@RequestMapping("rental/maintenance")
@CrossOrigin
public class MaintenanceController {
    @Autowired
    MaintenanceService maintenanceService;

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"success",maintenanceService.getAllMaintenance());
    }

    @GetMapping(path = "generateId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateId(){
        return new ResponseUtil(200,"success",maintenanceService.generateMaintenanceId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestBody MaintenanceDTO dto){
        maintenanceService.saveMaintenance(dto);
        return new ResponseUtil(200,"Maintenance added successfully..",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody MaintenanceDTO dto){
        maintenanceService.updateMaintenance(dto);
        return new ResponseUtil(200,"Maintenance updated successfully...",null);
    }

    @DeleteMapping(params = {"maiId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String maiId){
        maintenanceService.deleteMaintenance(maiId);
        return new ResponseUtil(200,"Maintenance deleted successfully..",null);
    }

    @GetMapping(path = "search",params = {"maiId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String maiId){
        return new ResponseUtil(200,"success",null);
    }











}
