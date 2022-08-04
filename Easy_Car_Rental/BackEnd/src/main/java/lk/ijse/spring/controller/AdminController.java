package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@RestController
@RequestMapping("rental/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    AdminService adminService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestBody AdminDTO dto){
        adminService.saveAdmin(dto);
        System.out.println(dto);
        return new ResponseUtil(200,"Admin saved successfully...!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody AdminDTO dto){
        adminService.updateAdmin(dto);
        return new ResponseUtil(200,"Admin Updated Successfully",null);

    }
    @DeleteMapping(params = {"adminEmail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String adminEmail){
        adminService.deleteAdmin(adminEmail);
        return new ResponseUtil(200,"Admin deleted successfully..",null);

    }

    @GetMapping(path = "search",params = {"adminEmail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil   search(@RequestParam String adminEmail){
        return new ResponseUtil(200,"success",adminService.searchAdmin(adminEmail));
    }

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        System.out.println("ok get");
        return new ResponseUtil(200,"success",adminService.getAllAdmins());
    }
}
