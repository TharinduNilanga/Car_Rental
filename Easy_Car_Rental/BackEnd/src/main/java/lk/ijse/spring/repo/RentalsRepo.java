package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Rentals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface RentalsRepo extends JpaRepository<Rentals,String> {
    @Query(value = "SELECT renId FROM Rentals ORDER BY renId DESC LIMIT 1",nativeQuery = true)
    String getId();
}
