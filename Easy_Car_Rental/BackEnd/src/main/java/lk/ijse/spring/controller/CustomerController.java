package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Part;
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
     CustomerService customerService;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestPart("dto") CustomerDTO dto,@RequestPart("nicImg") MultipartFile nicImg,@RequestPart("licImg") MultipartFile licImg
    ){
       /* MultipartFile nic = saveAnUpdateFile(nicImg);
        MultipartFile lic = saveAnUpdateFile(licImg);
        dto.setNicImg(nic.getOriginalFilename());
        dto.setLicenseImg(lic.getOriginalFilename());
        customerService.saveCustomer(dto);
        return new ResponseUtil(200,"Customer Saved successfully....!",dto);
*/
        System.out.println(dto.toString());
        System.out.println(nicImg.getOriginalFilename());
       System.out.println(licImg.getOriginalFilename());
        System.out.println("////////////***");
        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            nicImg.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + nicImg.getOriginalFilename()));
            licImg.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + licImg.getOriginalFilename()));

            dto.setNicImg("uploads/"+nicImg.getOriginalFilename());
            dto.setLicenseImg("uploads/"+licImg.getOriginalFilename());
            //save the path of the uploaded image in the temporary database
            //allImages.add("uploads/" + myFile.getOriginalFilename());
            customerService.saveCustomer(dto);
            System.out.println(dto.toString());
        } catch (URISyntaxException | IOException e) {
            e.printStackTrace();
        }
        /*System.out.println(nicImg.getOriginalFilename());*/
//        System.out.println(dto.toString());
//       // System.out.println(dto.getNicImg());
//        System.out.println("IMG");
//        System.out.println(nicImg.getOriginalFilename());
//        System.out.println(licImg.getOriginalFilename());
//        System.out.println("/////////////////////////////////");
//        dto.setNicImg(nicImg.getOriginalFilename());
//        dto.setLicenseImg(licImg.getOriginalFilename());
//        System.out.println(dto.toString());
        return  new ResponseUtil(200,"saved Customer",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@ModelAttribute CustomerDTO dto,@RequestPart("nicImg")MultipartFile nicImg,@RequestPart("licImg") MultipartFile licImg){
        MultipartFile nic = saveAnUpdateFile(nicImg);
        MultipartFile lic = saveAnUpdateFile(licImg);
        dto.setNicImg(nic.getOriginalFilename());
        dto.setLicenseImg(lic.getOriginalFilename());
        customerService.updateCustomer(dto);
        return new ResponseUtil(200,"Customer update successfully....!",dto);
    }

    @DeleteMapping(params = {"eMail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil  delete(@RequestParam String eMail){
        customerService.deleteCustomer(eMail);
        return new ResponseUtil(200,"Customer Deleted Successfully...!",null);
    }

    @GetMapping(path = "search",params = {"eMail"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String eMail){
        return new ResponseUtil(200,"Customer Searched Successfully...!",customerService.searchCustomer(eMail));
    }

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"Getting Data SuccessFull...!",customerService.getAllCustomer());
    }



    private MultipartFile saveAnUpdateFile(MultipartFile file1){
        MultipartFile file = file1;


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
