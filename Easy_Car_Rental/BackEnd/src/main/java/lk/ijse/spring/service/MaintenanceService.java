package lk.ijse.spring.service;

import lk.ijse.spring.dto.MaintenanceDTO;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface MaintenanceService {
    String generateMaintenanceId();
    void saveMaintenance(MaintenanceDTO dto);
    void updateMaintenance(MaintenanceDTO dto);
    void deleteMaintenance(String maiId);
    MaintenanceDTO searchMaintenance(String maiId);
    List<MaintenanceDTO> getAllMaintenance();

}
