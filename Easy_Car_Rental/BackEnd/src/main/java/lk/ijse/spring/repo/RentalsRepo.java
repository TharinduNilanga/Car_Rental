package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Rentals;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface RentalsRepo extends JpaRepository<Rentals,String> {
}
