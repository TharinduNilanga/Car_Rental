package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
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
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;



    @Override
    public void saveDiver(DriverDTO dto) {
        if (!repo.existsById(dto.getDriverEmail())){
            repo.save(mapper.map(dto, Driver.class));
        }else {
            throw new RuntimeException("Driver "+dto.getDriverEmail()+"  is already exists....!");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
            if (repo.existsById(dto.getDriverEmail())){
                repo.save(mapper.map(dto,Driver.class));
            }else {
                throw new RuntimeException("Driver update failed...!   "+dto.getDriverEmail()+" is not exists...!");
            }
    }

    @Override
    public void deleteDriver(String id) {
            if (repo.existsById(id)){
                repo.deleteById(id);
            }else {
                throw new RuntimeException("Driver delete failed....!"+id+" is not exists...!");
            }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (repo.existsById(id)){
            return mapper.map(repo.findById(id).get(),DriverDTO.class);
        }else {
            throw new RuntimeException("Driver search failed...! "+id+" not exists....!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return mapper.map(repo.findAll(),new TypeToken<List<DriverDTO>>(){}.getType());
    }
}
