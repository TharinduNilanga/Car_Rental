package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Maintenance;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.RentalRequestDetailsRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.RentalRequestService;
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
public class RentalRequestServiceImpl implements RentalRequestService {

    @Autowired
    private RentalRequestRepo  repo;

    @Autowired
    private RentalRequestDetailsRepo detailsRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public String generateRequestId() {
        PageRequest request = PageRequest.of(0, 1, Sort.by("reqId").descending());
        RentalRequest map = mapper.map(repo.findAll(request), RentalRequest.class);
        if (map.getReqId() !=null){
            int temp = Integer.parseInt(map.getReqId().split("-")[1]);
            temp = temp + 1;
            if (temp <= 9) {
                return "REQ-00" + temp;
            } else if (temp <= 99) {

                return "REQ-0" + temp;
            } else {
                return "REQ-" + temp;
            }
        } else {
            return "REQ-001";
        }
    }

    @Override
    public void saveRequest(RentalRequestDTO dto) {
        RentalRequest request = mapper.map(dto, RentalRequest.class);
        if (!repo.existsById(dto.getReqId())){
            repo.save(request);
            if (dto.getRentalRequestDetails().size()<1)throw new RuntimeException("No cars added.....!");
        }else {
            throw new RuntimeException("Request Failed...");
        }
    }

    @Override
    public void updateRequest(RentalRequestDTO dto) {
            if (repo.existsById(dto.getReqId())){
                RentalRequest request = mapper.map(dto, RentalRequest.class);
                if (dto.getRentalRequestDetails().size()<1)throw new RuntimeException("No cars added.....!");

                repo.deleteById(dto.getReqId());
                repo.save(request);
            }else {
                throw new RuntimeException("Update failed ....!"+dto.getReqId()+" not exists....!");
            }
    }

    @Override
    public void deleteRequest(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("delete failed ....!"+id+" not exists....!");
        }
    }

    @Override
    public RentalRequestDTO searchRequest(String id) {
        if (repo.existsById(id)){
           return mapper.map(repo.findById(id).get(),RentalRequestDTO.class);
        }else {
            throw new RuntimeException("search failed ....!"+id+" not exists....!");
        }
    }

    @Override
    public List<RentalRequestDTO> getAllRequest() {
        return mapper.map(repo.findAll(),new TypeToken<List<RentalRequestDTO>>(){}.getType());
    }
}
