package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CarDetailsDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
 * @created 7/13/2022
 */
@RestController
@RequestMapping("rental/car")
@CrossOrigin
public class CarController {
    @Autowired
    CarService carService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@RequestPart("dto")CarDTO carDTO,
                             @RequestPart("firstImg")MultipartFile firstImg,
                             @RequestPart("secondImg") MultipartFile secondImg,
                             @RequestPart("thirdImg")MultipartFile thirdImg,
                             @RequestPart("fourthImg") MultipartFile fourthImg)
    {
        System.out.println(carDTO);
        System.out.println("uploads/"+firstImg.getOriginalFilename());
        System.out.println("uploads/"+secondImg.getOriginalFilename());
        System.out.println("uploads/"+thirdImg.getOriginalFilename());
        System.out.println("uploads/"+fourthImg.getOriginalFilename());


        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            firstImg.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + firstImg.getOriginalFilename()));
            secondImg.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + secondImg.getOriginalFilename()));
            thirdImg.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + thirdImg.getOriginalFilename()));
            fourthImg.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + fourthImg.getOriginalFilename()));
            List<CarDetailsDTO> dtoList=new ArrayList<>();
            CarDetailsDTO carDetailsDTO = new CarDetailsDTO();
            carDetailsDTO.setRegNo(carDTO.getRegNo());
            carDetailsDTO.setFirstImg("uploads/"+firstImg.getOriginalFilename());
            carDetailsDTO.setSecondImg("uploads/"+secondImg.getOriginalFilename());
            carDetailsDTO.setThirdImg("uploads/"+thirdImg.getOriginalFilename());
            carDetailsDTO.setFourthImg("uploads/"+fourthImg.getOriginalFilename());
            dtoList.add(carDetailsDTO);

            carDTO.setCarDetails(dtoList);
        /*    for (CarDetailsDTO carDetail : carDTO.getCarDetails()) {
                carDetail.setRegNo(carDTO.getRegNo());
                carDetail.setFirstImg("uploads/"+firstImg.getOriginalFilename());
                carDetail.setSecondImg("uploads/"+secondImg.getOriginalFilename());
                carDetail.setThirdImg("uploads/"+thirdImg.getOriginalFilename());
                carDetail.setFourthImg("uploads/"+fourthImg.getOriginalFilename());
                carService.saveCar(carDTO);
                carDTO.setCarDetails(carDetail);

            }

            dto.setNicImg("uploads/"+nicImg.getOriginalFilename());
            dto.setLicenseImg("uploads/"+licImg.getOriginalFilename());
            //save the path of the uploaded image in the temporary database
            //allImages.add("uploads/" + myFile.getOriginalFilename());
            customerService.saveCustomer(dto);
            System.out.println("////////////////////");
          //  System.out.println(carDTO.getCarDetails().toString());
            System.out.println("////////////////////");
            System.out.println(carDTO.toString());*/
            carService.saveCar(carDTO);
        } catch (URISyntaxException | IOException e) {
            e.printStackTrace();
        }

        return new ResponseUtil(200,"Car Added Successfully....!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@RequestBody CarDTO carDTO,
                             @RequestPart("firstImg")MultipartFile firstImg,
                             @RequestPart("secondImg") MultipartFile secondImg,
                             @RequestPart("thirdImg")MultipartFile thirdImg,
                             @RequestPart("fourthImg") MultipartFile fourthImg)
    {

        MultipartFile img1 = saveAnUpdateFile(firstImg);
        MultipartFile img2 = saveAnUpdateFile(secondImg);
        MultipartFile img3 = saveAnUpdateFile(thirdImg);
        MultipartFile img4 = saveAnUpdateFile(fourthImg);
        for (CarDetailsDTO carDetail : carDTO.getCarDetails()) {
            carDetail.setFirstImg(img1.getOriginalFilename());
            carDetail.setSecondImg(img2.getOriginalFilename());
            carDetail.setThirdImg(img3.getOriginalFilename());
            carDetail.setFourthImg(img4.getOriginalFilename());
            carService.updateCar(carDTO);
        }
        return new ResponseUtil(200,"Car Updated Successfully....!",null);
    }

    @DeleteMapping(params = {"regNo"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String regNo){
        carService.deleteCar(regNo);
        return new ResponseUtil(200,"Car DeletedSuccessfully....!",null);
    }

    @GetMapping(path = "search",params = {"regNo"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil search(@RequestParam String regNo){
        return new ResponseUtil(200,"Car search Successfully....!",carService.searchCar(regNo));
    }
    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200,"Ok",carService.getAllCars());
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
