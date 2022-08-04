package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentalRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface RentalRequestRepo extends JpaRepository<RentalRequest,String> {
    @Query(value = "SELECT reqId FROM RentalRequest ORDER BY reqId DESC LIMIT 1",nativeQuery = true)
    String getId();

}
