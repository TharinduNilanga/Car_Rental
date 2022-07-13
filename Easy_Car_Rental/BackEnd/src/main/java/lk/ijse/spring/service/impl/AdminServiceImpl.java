package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.service.AdminService;
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
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveAdmin(AdminDTO dto) {
        if (!repo.existsById(dto.getAdminEmail())){
            repo.save(mapper.map(dto, Admin.class));
        }else {
            throw new RuntimeException("Admin saved failed.....! "+dto.getAdminEmail()+" is exists....!");
        }

    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getAdminEmail())){
            repo.save(mapper.map(dto,Admin.class));
        }else{
            throw new RuntimeException("Admin update failed....!  "+dto.getAdminEmail()+" Not Exists....!");
        }
    }

    @Override
    public void deleteAdmin(String id) {
            if (repo.existsById(id)){
                repo.deleteById(id);
            }else {
                throw new RuntimeException("Admin delete failed....!  "+id+" Not Exists....!");
            }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), AdminDTO.class);
        }else {
            throw new RuntimeException("No such Admin email is "+id+" ....!");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmins() {
        return mapper.map(repo.findAll(),new TypeToken<List<AdminDTO>>(){}.getType());
    }
}
