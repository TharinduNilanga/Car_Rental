package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.entity.Admin;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface AdminService {
    void saveAdmin(AdminDTO dto);
    void updateAdmin(AdminDTO dto);
    void deleteAdmin(String adminEmail);
    AdminDTO  searchAdmin(String adminEmail);
    List<AdminDTO> getAllAdmins();
}
