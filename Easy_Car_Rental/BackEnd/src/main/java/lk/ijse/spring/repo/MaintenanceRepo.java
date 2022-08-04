package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface MaintenanceRepo extends JpaRepository<Maintenance,String> {
    @Query(value = "SELECT maiId FROM Maintenance ORDER BY maiId DESC LIMIT 1",nativeQuery = true)
    String getId();
}
