package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReturnRentalsDTO;
import lk.ijse.spring.entity.Rentals;
import lk.ijse.spring.entity.ReturnRentals;
import lk.ijse.spring.repo.ReturnRentalsRepo;
import lk.ijse.spring.service.ReturnRentalService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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

    @Override
    public String generateReturnId() {
        PageRequest request = PageRequest.of(0, 1, Sort.by("retId").descending());
        ReturnRentals map = mapper.map(repo.findAll(request), ReturnRentals.class);
        if (map.getRetId() !=null){
            int temp = Integer.parseInt(map.getRetId().split("-")[1]);
            temp = temp + 1;
            if (temp <= 9) {
                return "RET-00" + temp;
            } else if (temp <= 99) {

                return "RET-0" + temp;
            } else {
                return "RET-" + temp;
            }
        } else {
            return "RET-001";
        }
    }

    @Override
    public void saveReturn(ReturnRentalsDTO dto) {
            if (!repo.existsById(dto.getRetId())){
                repo.save(mapper.map(dto,ReturnRentals.class));
            }else {
                throw new RuntimeException("Return added failed...!"+dto.getRetId()+"already exists...!");
            }
    }

    @Override
    public void updateReturn(ReturnRentalsDTO dto) {
        if (repo.existsById(dto.getRetId())){
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
}
