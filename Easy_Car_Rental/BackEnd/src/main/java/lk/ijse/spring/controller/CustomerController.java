package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.ws.Response;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

/**
 * @author Tharindu Nilanga
 * @created 7/11/2022
 */
@RestController
@RequestMapping("rental/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestBody CustomerDTO dto){
        MultipartFile nicFile = saveAnUpdateFileForNic(dto);
        MultipartFile licenseFile= saveAnUpdateFileForLicense(dto);
        dto.setNicImgFile("uploads/"+nicFile.getOriginalFilename());
        dto.setLicenseImgFile("uploads/"+licenseFile.getOriginalFilename());

        customerService.saveCustomer(dto);
        return new ResponseUtil(200,"Customer Saved successfully....!",dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody CustomerDTO dto){
        customerService.updateCustomer(dto);
        return new ResponseUtil(200,"Customer Updated Successfully...!",dto);
    }

    @DeleteMapping(params = {"eMail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil  delete(@RequestParam String eMail){
        customerService.deleteCustomer(eMail);
        return new ResponseUtil(200,"Customer Deleted Successfully...!",null);
    }

    @GetMapping(params = {"eMail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String eMail){
        return new ResponseUtil(200,"Customer Searched Successfully...!",customerService.searchCustomer(eMail));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"Getting Data SuccessFull...!",customerService.getAllCustomer());
    }



    private MultipartFile saveAnUpdateFileForNic(CustomerDTO dto){
        MultipartFile file = (MultipartFile) dto.getNicImgFile();


        try {
            String projectPath=new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadDir = new File(projectPath + "/uploads");
            uploadDir.mkdir();

            file.transferTo(new File(uploadDir.getAbsolutePath()+"/"+file.getOriginalFilename()));
        } catch (URISyntaxException | IOException e) {
            e.printStackTrace();
        }
        return file;
    }
    private MultipartFile saveAnUpdateFileForLicense(CustomerDTO dto){
        MultipartFile file = (MultipartFile) dto.getLicenseImgFile();


        try {
            String projectPath=new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadDir = new File(projectPath + "/uploads");
            uploadDir.mkdir();

            file.transferTo(new File(uploadDir.getAbsolutePath()+"/"+file.getOriginalFilename()));
        } catch (URISyntaxException | IOException e) {
            e.printStackTrace();
        }
        return file;
    }
}
