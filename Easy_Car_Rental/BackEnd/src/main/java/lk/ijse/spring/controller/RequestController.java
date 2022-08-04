package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDetailsDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.dto.RentalRequestDetailsDTO;
import lk.ijse.spring.dto.RentalsDTO;
import lk.ijse.spring.entity.RentalRequestDetails;
import lk.ijse.spring.service.RentalRequestService;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/14/2022
 */
@RestController
@RequestMapping("rental/request")
@CrossOrigin
public class RequestController {
    @Autowired
    RentalRequestService service;

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        System.out.println(service.getAllRequest());
        return new ResponseUtil(200,"success",service.getAllRequest());
    }

    @GetMapping(path = "generateId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateId(){
        return new ResponseUtil(200,"success",service.generateRequestId());
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestPart("dto") RentalRequestDTO dto,
                             /*@RequestPart("detail") RentalRequestDetailsDTO detailsDTO,*/
                             @RequestPart("img") MultipartFile  img){

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            img.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + img.getOriginalFilename()));


            dto.setLossDamageWaiverSlip("uploads/"+img.getOriginalFilename());






            service.saveRequest(dto);
        } catch (URISyntaxException | IOException e) {
            e.printStackTrace();
        }

        return new ResponseUtil(200,"Request added successfully...",null);

    }
    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@ModelAttribute RentalRequestDTO dto,@RequestPart("lossDamageWavierSlipImg") MultipartFile  lossDamageWavierSlipImg){
        MultipartFile ldwSlipImg = saveAnUpdateFile(lossDamageWavierSlipImg);
        /*for (RentalRequestDetails rentalRequestDetail : dto.getRentalRequestDetails()) {
            rentalRequestDetail.setLossDamageWaiverSlip(ldwSlipImg.getOriginalFilename());
            service.updateRequest(dto);
        }*/
        return new ResponseUtil(200,"Request update successfully...",null);
    }

    @DeleteMapping(params = {"reqId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String reqId){
        service.deleteRequest(reqId);
        return new ResponseUtil(200,"Request deleted successfully...",null);
    }

    @GetMapping(path = "search",params = {"reqId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String reqId){
        return new ResponseUtil(200,"success",service.searchRequest(reqId));
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
