package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.MaintenanceDTO;
import lk.ijse.spring.entity.Maintenance;
import lk.ijse.spring.repo.MaintenanceRepo;
import lk.ijse.spring.service.MaintenanceService;
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
public class MaintenanceServiceImpl implements MaintenanceService {

    @Autowired
    private MaintenanceRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public String generateMaintenanceId() {
        PageRequest request = PageRequest.of(0, 1, Sort.by("maiId").descending());
        Maintenance map = mapper.map(repo.findAll(request), Maintenance.class);
        if (map.getMaiId() !=null){
            int temp = Integer.parseInt(map.getMaiId().split("-")[1]);
            temp = temp + 1;
            if (temp <= 9) {
                return "MAI-00" + temp;
            } else if (temp <= 99) {
                return "MAI-0" + temp;
            } else {
                return "MAI-" + temp;
            }
        } else {
            return "MAI-001";
        }
    }

    @Override
    public void saveMaintenance(MaintenanceDTO dto) {
        if (!repo.existsById(dto.getMaiId())){
            repo.save(mapper.map(dto,Maintenance.class));

        }else {
            throw new RuntimeException("This Maintenance placed already.....!");
        }
    }

    @Override
    public void updateMaintenance(MaintenanceDTO dto) {
        if (repo.existsById(dto.getMaiId())){
            repo.save(mapper.map(dto,Maintenance.class));
        }else {
            throw new RuntimeException("This Maintenance "+dto.getMaiId()+ "Not  exists....!");
        }
    }

    @Override
    public void deleteMaintenance(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Delete failed...."+id+" not exists....!");
        }
    }

    @Override
    public MaintenanceDTO searchMaintenance(String id) {
        return mapper.map(repo.findById(id).get(),MaintenanceDTO.class);

    }

    @Override
    public List<MaintenanceDTO> getAllMaintenance() {
        return mapper.map(repo.findAll(),new TypeToken<List<MaintenanceDTO>>(){}.getType());
    }
}
