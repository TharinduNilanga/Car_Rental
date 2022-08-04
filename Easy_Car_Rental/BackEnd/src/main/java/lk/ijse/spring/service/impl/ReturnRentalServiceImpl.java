package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReturnRentalsDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.ReturnRentals;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.IncomeRepo;
import lk.ijse.spring.repo.ReturnRentalsRepo;
import lk.ijse.spring.service.ReturnRentalService;
import lk.ijse.spring.dto.IncomeDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */

@Service
@Transactional
public class ReturnRentalServiceImpl implements ReturnRentalService {
    @Autowired
    private ReturnRentalsRepo repo;

    @Autowired
    private ModelMapper mapper;
    @Autowired
    private CarRepo carRepo;

    @Autowired
    private IncomeRepo incomeRepo;



    @Override
    public String generateReturnId() {
        if (repo.getId()!=null){
            String id = repo.getId();
            int newId = Integer.parseInt(id.replace("RET-", ""));
            return String.format("RET-%03d",newId+1);
        }else {
            return "RET-001";
        }
    }

    @Override
    public void saveReturn(ReturnRentalsDTO dto) {
            if (!repo.existsById(dto.getRetId())){


                if (carRepo.existsById(dto.getRegNo())){
                   //12000km
                     int no=dto.getDriveKm().length();//length 7
                     String s=dto.getDriveKm().substring(no-2,no);//km
                     String km= dto.getDriveKm().substring(0,no-2);//12000
                     int dkm=Integer.parseInt(km);
                    Car car = carRepo.findById(dto.getRegNo()).get();
                    int rno=car.getDriveKm().length();
                    String rkm=car.getDriveKm().substring(0,rno-2);
                    int newKm=Integer.parseInt(rkm);

                    int calculatedKm=dkm+newKm;

                    String driveKm=calculatedKm+s;
                    car.setDriveKm(driveKm);
                    carRepo.save(car);


                }else {
                    throw new RuntimeException("driverKm not been calculated");
                }


                repo.save(mapper.map(dto,ReturnRentals.class));


            }else {
                throw new RuntimeException("Return added failed...!"+dto.getRetId()+"already exists...!");
            }
    }

    @Override
    public void updateReturn(ReturnRentalsDTO dto) {
        if (repo.existsById(dto.getRetId())){

            ReturnRentals rentals = repo.findById(dto.getRetId()).get();
            int len=rentals.getDriveKm().length();
            String sub=rentals.getDriveKm().substring(0,len-2);
            int previousKm=Integer.parseInt(sub);



            if (carRepo.existsById(dto.getRegNo())){
                int no=dto.getDriveKm().length();
                String km=dto.getDriveKm().substring(0,no-2);
                int newKm=Integer.parseInt(km);
                ////////////////////////////
                Car car = carRepo.findById(dto.getRegNo()).get();
                int rno=car.getDriveKm().length();
                String rkm=car.getDriveKm().substring(0,rno-2);
                int calKm=Integer.parseInt(rkm);
                //300<200
                if (previousKm<newKm){
                    int nKm=newKm-previousKm;
                    car.setDriveKm((calKm+nKm)+"Km");

                }else {
                    car.setDriveKm((calKm-newKm)+"Km");
                }

                carRepo.save(car);

            }else {
                throw new RuntimeException("driverKm not been calculated");
            }
            repo.save(mapper.map(dto,ReturnRentals.class));

        }else {
            throw new RuntimeException("Return Update failed...!"+dto.getRetId()+" Not exists...!");
        }
    }

    @Override
    public void deleteReturn(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Return deleted failed.....!"+id+"not exists....!");
        }
    }

    @Override
    public ReturnRentalsDTO searchReturn(String id) {
        if (repo.existsById(id)){
            return mapper.map(repo.findById(id).get(),ReturnRentalsDTO.class);
        }else {
            throw new RuntimeException("Return Search failed...!"+id+"not exists...!");
        }
    }

    @Override
    public List<ReturnRentalsDTO> getAllReturns() {
        return mapper.map(repo.findAll(),new TypeToken<List<ReturnRentalsDTO>>(){}.getType());
    }

    @Override
    public List<IncomeDTO> dailyIncome() {

        return mapper.map(incomeRepo.getMonthlyIncome(),new TypeToken<List<IncomeDTO>>(){}.getType());
    }

    @Override
    public List<IncomeDTO> MonthlyIncome() {
        return null;
    }

    @Override
    public List<IncomeDTO> AnnuallyIncome() {
        return null;
    }
}
