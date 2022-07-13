package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalsDTO;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.entity.Rentals;
import lk.ijse.spring.repo.RentalsRepo;
import lk.ijse.spring.service.RentalService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@Service
@Transactional
public class RentalServiceImpl implements RentalService {
    @Autowired
    private RentalsRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public String generateRentalId() {
        PageRequest request = PageRequest.of(0, 1, Sort.by("renId").descending());
        Rentals map = mapper.map(repo.findAll(request), Rentals.class);
        if (map.getRenId() !=null){
            int temp = Integer.parseInt(map.getRenId().split("-")[1]);
            temp = temp + 1;
            if (temp <= 9) {
                return "REN-00" + temp;
            } else if (temp <= 99) {

                return "REN-0" + temp;
            } else {
                return "REN-" + temp;
            }
        } else {
            return "REN-001";
        }
    }

    @Override
    public void saveRental(RentalsDTO dto) {
            if (!repo.existsById(dto.getRenId())){
                repo.save(mapper.map(dto,Rentals.class));
            }else {
                throw new RuntimeException("Rental adding failed.... "+dto.getRenId()+" exists...");
            }
    }

    @Override
    public void updateRental(RentalsDTO dto) {
        if (repo.existsById(dto.getRenId())){
            repo.save(mapper.map(dto,Rentals.class));
        }else {
            throw new RuntimeException("Rental Update failed...!"+dto.getRenId()+" not exists....!");
        }

    }

    @Override
    public void deleteRental(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Rental delete failed...!"+id+" not exists...!");
        }
    }

    @Override
    public RentalsDTO searchRental(String id) {
        if (repo.existsById(id)){
            return mapper.map(repo.findById(id).get(),RentalsDTO.class);
        }else {
            throw new RuntimeException("Rental search failed...!"+id+" not exists...!");
        }

    }

    @Override
    public List<RentalsDTO> getAllRentals() {
        return mapper.map(repo.findAll(),new TypeToken<List<RentalsDTO>>(){}.getType());
    }
}
